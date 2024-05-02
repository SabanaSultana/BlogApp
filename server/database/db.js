import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();


export const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL,(
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
            }
        ))
        console.log("DB connected successfully")
    }
    catch(err){
        console.log("error while connecting db",err)
        console.log("db is not connected ")
        process.exit(1)
    }
}