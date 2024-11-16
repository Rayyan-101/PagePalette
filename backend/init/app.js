import mongoose from "mongoose";
import initData from './data.js'
import Book from "../model/book_model.js";

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/bookStore");
}

const initDB=async ()=>{
    await Book.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj}));
    await Book.insertMany(initData.data);
    console.log("data inserted successfully");
}

initDB();