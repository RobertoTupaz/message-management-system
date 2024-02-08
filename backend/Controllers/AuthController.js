//const User = require("../Models/UserModel");
import { User } from "../Models/Users.js";
//const { createSecretToken } = require("../util/SecretToken");
import { createSecretToken } from "../util/SecretToken.js";
// const bcrypt = require("bcryptjs");
import bcrypt from "bcrypt"
import asyncHandler from "express-async-handler"
import cookieParser from "cookie-parser";
import { response } from "express";

export const Signup = async (req, res, next) => {
  try {
    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.confirmPassword ||
      !req.body.username ||
      !req.body.first_name ||
      !req.body.last_name
    ) {
      return res.status(400).send({
        message: 'All required fields'
      });
    }

    if(!req.body.password === req.body.confirmPassword) {
      return res.status(500).json({messgae: 'password and confirm password is not the same!'});
    }

    const newUser = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }

    const email = newUser.email;

    const existingUser = await User.findOne({email});

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create(newUser);
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
}

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' });
    }
    const token = createSecretToken(user._id);

    res.cookie("username", user.username, {withCredentials: true, httpOnly: false});
    res.cookie("email", user.email, {withCredentials: true, httpOnly: false});
    res.cookie("fName", user.first_name, {withCredentials: true, httpOnly: false});
    res.cookie("lName", user.last_name, {withCredentials: true, httpOnly: false});
    res.cookie("token", token, {withCredentials: true, httpOnly: false});
    
    res.status(201).json({ message: "User logged in successfully", success: true });
    next()

  } catch (error) {
    console.error(error);
  }
}
