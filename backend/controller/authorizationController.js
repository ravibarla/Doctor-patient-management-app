import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//set up dot env
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authorization = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "invalid token" });
  }
  jwt.verify(
    token,
    JWT_SECRET_KEY,
    { algorithms: ["HS256"] },
    (error, user) => {
      if (error) {
        return res.status(403).json({ message: "some error" });
      }
      req.user = user;
      next();
    }
  );
};

export const adminAuthorization = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "invalid token" });
  }
  jwt.verify(
    token,
    JWT_SECRET_KEY,
    { algorithms: ["HS256"] },
    (error, user) => {
      if (error) {
        return res.status(403).json({ message: "some error" });
      }
      if (user.userType == "admin") {
        req.user = user;
        next();
      } else {
        return res.status(405).json({ message: "unauthorized user" });
      }
    }
  );
};

export const doctorAuthorization = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "invalid token" });
  }
  jwt.verify(
    token,
    JWT_SECRET_KEY,
    { algorithms: ["HS256"] },
    (error, user) => {
      if (error) {
        return res.status(403).json({ message: "some error" });
      }
      if (user.userType == "doctor") {
        req.user = user;
        next();
      } else {
        return res.status(405).json({ message: "unauthorized user" });
      }
    }
  );
};


export default authorization;
