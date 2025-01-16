import jwt from "jsonwebtoken";
export const logIn = (req, res) => {
  const { username, password } = req.body;
  const data = {
    username: "admin",
    password: "password",
  };
  if (username !== data.username || password !== data.password)
    return res.status(401).json({ error: "Invalid username or password" });

  const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
    expiresIn: "1m",
  });
  res.cookie("sessionid", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    maxAge: "60000",
  });
  return res.status(200).json({ message: "login success" });
};

export const validateSession = (req, res) => {
  return res.status(200).json({ message: "login success" });
};

export const logOut = (req, res) => {
  return res.clearCookie("sessionid").json({ message: "logout success" });
};
