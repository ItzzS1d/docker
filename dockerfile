# Use the official Node.js 18 LTS image as the base image
FROM node:18

# Create and set the Chrome executable path environment variable
ENV CHROME_BIN=/usr/bin/google-chrome
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Install dependencies and Chrome
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y \
        google-chrome-stable \
        fonts-ipafont-gothic \
        fonts-wqy-zenhei \
        fonts-thai-tlwg \
        fonts-kacst \
        fonts-freefont-ttf \
        fonts-noto-cjk \
        fonts-noto \
        fonts-noto-color-emoji \
        libxss1 \
        xvfb \
        fonts-lohit-knda \
        fonts-knda \
        fonts-guru \
        fonts-guru-extra \
        --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Add user early in the build process
RUN groupadd -r pptruser \
    && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package files and set ownership in one layer
COPY --chown=pptruser:pptruser package*.json ./

# Install all dependencies
RUN npm uninstall puppeteer && \
    npm install puppeteer-core && \
    npm install

# Copy the application code
COPY --chown=pptruser:pptruser . .

# Create cache directory for Puppeteer and set permissions
RUN mkdir -p /home/pptruser/.cache/puppeteer \
    && chown -R pptruser:pptruser /home/pptruser/.cache

# Ensure proper ownership of all application files
RUN chown -R pptruser:pptruser /usr/src/app

# Set the non-privileged user as the working user
USER pptruser

# Expose the port your application runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]