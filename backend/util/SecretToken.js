// require("dotenv").config();
import dotenv from "dotenv"
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"

export const createSecretToken = (id) => {
  return jwt.sign({ id: id }, "abc123", {
    expiresIn: '30d',
  });
};