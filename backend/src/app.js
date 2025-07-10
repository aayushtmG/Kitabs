import express from 'express';
import userRoutes from '../routes/userRoutes.js';
import productRoutes from '../routes/productRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import globalErrorHandler from '../controllers/errorController.js';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser' 

import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const __dirname = path.resolve(); // Fixed `__dirname` for ES modules
app.use(
  '/uploads',
  express.static(path.join(process.cwd(), 'public/images'))
);
// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


// Global Error Handler
app.use(globalErrorHandler);

export default app;
