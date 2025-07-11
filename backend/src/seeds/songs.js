import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config();
const songs = [
    {
        title: "Kesariya",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/1.jpeg",
        audioUrl: "/Songs/Kesariya.mp3",
        duration: "288",
    },
    {
        title: "Laal Peeli Akhiyaan",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/2.jpeg",
        audioUrl: "/Songs/Laal Peeli Akhiyaan.mp3",
        duration: "188"
    },
    {
        title: "O Mahi O Mahi",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/3.jpeg",
        audioUrl: "/Songs/O Mahi O Mahi.mp3",
        duration: "233"
    },
    {
        title: "Phele Bhi Main",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/4.jpeg",
        audioUrl: "/Songs/Phele Bhi Main.mp3",
        duration: "250"
    },
    {
        title: "Teri Baaton Mein Aisa Uljha Jiya",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/5.jpeg",
        audioUrl: "/Songs/Teri Baaton Mein Aisa Uljha Jiya.mp3",
        duration: "152"
    },
    {
        title: "Tum Se",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/6.jpeg",
        audioUrl: "/Songs/Tum Se.mp3",
        duration: "145",
    },
    {
        title: "Daaku",
        artist: "Badshah",
        imageUrl: "/cover-images/7.jpeg",
        audioUrl: "/Songs/Daaku.mp3",
        duration: "167",
    },
    {
        title: "God Damn",
        artist: "Badshah Karan Aujla",
        imageUrl: "/cover-images/8.jpeg",
        audioUrl: "/Songs/God Damn.mp3",
        duration: "167",
    },
    {
        title: "Sadqay",
        artist: "Aashir Wajahat",
        imageUrl: "/cover-images/9.jpeg",
        audioUrl: "/Songs/Sadqay.mp3",
        duration: "204",
    },
    {
        title: "Yimmy Yimmy",
        artist: "Rajat Nagpal",
        imageUrl: "/cover-images/10.jpeg",
        audioUrl: "/Songs/Yimmy Yimmy.mp3",
        duration: "215",
    },
];

const seedSongs = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);


        // Clear existing songs
        await Song.deleteMany({});
        // Insert new Songs
        await Song.insertMany(songs);

        console.log("Songs seeded successfully!");
    } catch (error) {
        console.error("Error seeding songs:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedSongs();