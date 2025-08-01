import {User} from "../models/user.model.js";
import { connectDB } from "../lib/db.js";
export const authCallback = async(req , res , next)=>{
    try {
        const {id,firstName, lastName, imageUrl} = req.body;

        await connectDB();

        // check if user already exists
        const user = await User.findOne({clerkId: id});

        if(!user){
            // Signup
            await User.create({
                clerkId: id,
                fullName: `${firstName || ""} ${lastName || ""}`.trim(),
                imageUrl
            });
        };

        res.status(200).json({success: true})
    } catch (error) {
        console.log("Error in auth Callback", error);
        next(error)
    };
};