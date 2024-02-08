import express from "express";
import { User } from "../Models/Users.js";
import { Question } from "../Models/Questions.js";
import { Message } from "../Models/Messages.js";
import { Group } from "../Models/Group.js";
import { GroupMember } from "../Models/Group_Members.js";
import { GroupCategory } from "../Models/Group_Category.js";
import { Answer } from "../Models/Answers.js";


const mainRouter = express.Router();

mainRouter.get('getUser', () => {

});

export default mainRouter;