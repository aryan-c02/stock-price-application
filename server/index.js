import express, { urlencoded } from "express";
import dotenv from "dotenv";
import stockRouter from "./rotues/stocks.js"
import userRouter from "./rotues/user.js";
const app = express();



// middlewares;
app.use(express.json);
app.use(express.json, urlencoded({ extended: true }));


// router
app.use("/api/stocks", stockRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
    try {
        console.log(`Server is running on the PORT:${PORT}`)
    } catch (error) {
        console.log("Error while running server", error);
    }
})