import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  title: String,
});

const amenitiesSchema = new mongoose.Schema({
  title: String,
});

const destinationSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  categories: [categorySchema],
  amenities: [amenitiesSchema],
  price: Number,
  guests: Number,
});

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;