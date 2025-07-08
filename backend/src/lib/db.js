import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    // ✅ Debug print
    console.log('Connecting to MongoDB URI:', mongoURI);

    if (!mongoURI) {
      throw new Error('❌ Missing MONGODB_URI in environment');
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};
