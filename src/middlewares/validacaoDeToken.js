import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { users } from "../models/index.js";

dotenv.config();


/* eslint-disable no-unused-vars */
function validacaoDeToken(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.send(401);
    }

    const parts = authorization.split(" ");
    const [schema, token] = parts;

    if (schema !== "Bearer" || parts.length !== 2) {
      return res.send(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      try {
        if (err) {
          return res.status(401).send({ message: "Token Invalid" });
        }
        const user = await users.findById(decoded.id);

        if (!user || !user._id) {
          return res.status(401).send({ message: "Token ID Invalid" });
        }
        req.userID = user._id;
        next();
      }
      catch (err) {
        next(err);
      }
    });
  }
  catch (err) {
    next(err);
  }
}

export default validacaoDeToken;