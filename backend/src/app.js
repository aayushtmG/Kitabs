import express from 'express'
import userRoutes from '../routes/userRoutes.js'
import productRoutes from '../routes/productRoutes.js'
import globalErrorHandler from '../controllers/errorController.js';
import cors from "cors"
import path from 'path'
const app = express();
const __dirname = import.meta.dirname


app.use('/uploads/',express.static(path.resolve(__dirname,'../public/images')));


app.use(cors())
app.use(express.json({ limit: "10kb" }));


app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);


app.use(globalErrorHandler)


export default app;