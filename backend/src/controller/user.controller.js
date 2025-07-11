import { User } from '../models/user.model.js';

export const registerUser = async (req, res, next) => {
  try {
    const { fullName, imageUrl, clerkId, email } = req.body;

    console.log('Incoming user:', req.body);

    if (!fullName || !imageUrl || !clerkId || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    let user = await User.findOne({ clerkId });
    if (user) return res.status(200).json(user);

    user = new User({ fullName, imageUrl, clerkId, email });
    await user.save();

    console.log(' User saved to MongoDB');
    res.status(201).json(user);
  } catch (error) {
    console.error('registerUser error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllUsers = async (req , res , next ) => {
  try {
    const currentUserId = req.auth().userId;
    const users = await User.find()
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};