import express from 'express'
import { dbConnect } from './database/db.js';
import router from './routes/route.js';
const app=express();

const PORT=4000
app.use("/",router)

//db connection
dbConnect()

app.listen(PORT,()=> console.log(`App is running at port ${PORT}`))