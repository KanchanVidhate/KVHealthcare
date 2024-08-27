import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
import cors from 'cors';

const PORT=process.env.PORT ||5000;
const MONGO_URL=process.env.MONGO_URL;


const app=express();
app.use(express.json());
app.use(cors());


//EFFIE
(async()=>{
    const conn=await mongoose.connect(MONGO_URL);

     if(conn){
        console.log('connect to MongoDB');

     }
    })();
    //

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);

});

