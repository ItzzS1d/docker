import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  const { sessionid } = req.cookies;
  if (!sessionid) return res.status(401).json({ error: "unauthorized" });
  jwt.verify(sessionid, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "session expired" });

    next();
  });
};

export default isAuth;
