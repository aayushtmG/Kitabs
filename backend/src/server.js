import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app.js'

dotenv.config({path:'.env'})

const DB = process.env.DATABASE.replace('<db_password>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(()=>console.log('db connection successfull')).catch((err)=>console.log(err));

const server = app.listen(5000,()=>{
  console.log('listening to 5000')
})