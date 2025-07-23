import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express';
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";  
import {initializeSocket} from "./lib/socket.js";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";

import { connectDB } from "./lib/db.js";


dotenv.config();

const __dirname = path.resolve();
const app = express();

const httpServer = createServer(app);
initializeSocket(httpServer);


app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
));


app.use(express.json());  // to parse req.body  
app.use(clerkMiddleware()); // this will add auth to req obj => req.auth.userId
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: path.join(__dirname, "tmp"),
        createParentPath: true,
        limits: {
            fileSize: 10 * 1024 * 1024, // 10MB max file size 
        },
    })
);


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

import mongoose from 'mongoose';
import { createServer } from "http";


dotenv.config();

app.use(cors());
app.use(express.json());
// API Route
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log('MongoDB Connection Error:', err));

httpServer.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
