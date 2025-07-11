import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Clear existing data
        await Album.deleteMany({});
        await Song.deleteMany({});

        // First, create all songs
        const createdSongs = await Song.insertMany([
            {
                title: "Kesariya",
                artist: "Arijit Singh",
                imageUrl: "/cover-images/1.jpeg",
                audioUrl: "/Songs/Kesariya.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "288",
            },
            {
                title: "Laal Peeli Akhiyaan",
                artist: "Arijit Singh",
                imageUrl: "/cover-images/2.jpeg",
                audioUrl: "/Songs/Laal Peeli Akhiyaan.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "188"
            },
            {
                title: "O Mahi O Mahi",
                artist: "Arijit Singh",
                imageUrl: "/cover-images/3.jpeg",
                audioUrl: "/Songs/O Mahi O Mahi.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "233"
            },
            {
                title: "Phele Bhi Main",
                artist: "Arijit Singh",
                imageUrl: "/cover-images/4.jpeg",
                audioUrl: "/Songs/Phele Bhi Main.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "250"
            },
            {
                title: "Teri Baaton Mein Aisa Uljha Jiya",
                artist: "Arijit Singh",
                imageUrl: "/cover-images/5.jpeg",
                audioUrl: "/Songs/Teri Baaton Mein Aisa Uljha Jiya.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "152"
            },
            {
                title: "Tum Se",
                artist: "Arijit Singh",
                imageUrl: "/cover-images/6.jpeg",
                audioUrl: "/Songs/Tum Se.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "145",
            },
            {
                title: "Daaku",
                artist: "Badshah",
                imageUrl: "/cover-images/7.jpeg",
                audioUrl: "/Songs/Daaku.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "167",
            },
            {
                title: "God Damn",
                artist: "Badshah Karan Aujla",
                imageUrl: "/cover-images/8.jpeg",
                audioUrl: "/Songs/God Damn.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "167",
            },
            {
                title: "Sadqay",
                artist: "Aashir Wajahat",
                imageUrl: "/cover-images/9.jpeg",
                audioUrl: "/Songs/Sadqay.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "204",
            },
            {
                title: "Yimmy Yimmy",
                artist: "Rajat Nagpal",
                imageUrl: "/cover-images/10.jpeg",
                audioUrl: "/Songs/Yimmy Yimmy.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: "215",
            },

        ]);

        // Create albums with references to song IDs
        const albums = [
            {
                title: "Arijit Singh",
                artist: "Various Artists",
                imageUrl: "/Albums/1.jpeg",
                releaseYear: 2025,
                songs: createdSongs.slice(0, 5).map((song) => song._id),
            },
            {
                title: "Bollywood Songs",
                artist: "Various Artists",
                imageUrl: "/Albums/2.jpeg",
                releaseYear: 2024,
                songs: createdSongs.slice(5,10).map((song) => song._id),
            },
        ];

        // Insert all albums
        const createdAlbums = await Album.insertMany(albums);

        // Update songs with their album references
        for (let i = 0; i < createdAlbums.length; i++) {
            const album = createdAlbums[i];
            const albumSongs = albums[i].songs;

            await Song.updateMany({ _id: { $in: albumSongs } }, { albumId: album._id });
        }

        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();