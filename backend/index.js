import express from "express";
const app=express();
import dotenv from "dotenv";
const PORT=process.env.PORT || 4000;
const URI=process.env.URI;
import mongoose from 'mongoose';
import bookRoute from "./route/book_route.js";
import cors from "cors";
import userRoute from "./route/user_route.js";

app.use(cors());
app.use(express.json());
dotenv.config();

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(URI);
}

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`);
});