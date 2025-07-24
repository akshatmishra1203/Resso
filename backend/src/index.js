import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express';
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";  
import fs from "fs";
import {initializeSocket} from "./lib/socket.js";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";

import cron from "node-cron";


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
const tempDir = path.join(process.cwd(),"tmp")
// cron jobs
cron.schedule("0 * * * *",() => {
    if(fs.existsSync(tempDir)) {
        fs.readdir(tempDir,(err, files) => {
            if (err) {
                console.log("error" , err);
                return;
            }
            for (const file of files) {
                fs.unlink(path.join(tempDir, file),(err) => {});
            }
        });
    }
})


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname,"../frontend","dist","index.html"));
    });
}



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
