// models/Destination.js
import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
  title: String,
  href: String,
  description: String,
  amenities: [String],
  category: String,
  imageUrl: String,
  price: String,
  guests: String,
});

// const Destination = mongoose.model('Destination', DestinationSchema);
const Destination = mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);


export default Destination;
