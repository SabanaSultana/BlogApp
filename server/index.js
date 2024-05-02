import express from 'express'
import { dbConnect } from './database/db.js';
const app=express();

const PORT=4000

//db connection
dbConnect()

app.listen(PORT,()=> console.log(`App is running at port ${PORT}`))