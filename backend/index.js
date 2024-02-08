import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import mainRoute from "./Routes/mainRoute.js";
import authRoute from "./Routes/AuthRoute.js";
import cookieParser  from "cookie-parser";

const app = express();
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(express.json()); //Pharsing Request Body
app.use(cookieParser());
app.use("/", authRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log(`App connected to Database sucessfully!`);
    app.listen(PORT, () => {
        console.log('App is listening to port:' + PORT);
    })
})
.catch((error) => {
    console.log(error);
});