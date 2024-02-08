// const User = require("../Models/UserModel");
import {User} from "../Models/Users.js";

import jwt from "jsonwebtoken";

export const userVerification = (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, 'abc123', async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      console.log(user)
      if (user) {
        return res.json({ 
          status: true,
          user: user.username,
          email: user.email,
          fName: user.first_name,
          lName: user.last_name,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        })
      } else {
        return res.json({ status: false })
      } 
    }
  })
}