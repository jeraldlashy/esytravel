// db.js
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://admin:admin@travel.vvitj2a.mongodb.net/?retryWrites=true&w=majority";
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function dbConnect() {
  if (mongoose.connection.readyState) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, connectionOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default dbConnect;
