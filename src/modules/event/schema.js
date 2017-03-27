import mongoose from 'mongoose'

export default mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    start: Date,
    end: Date,
  },
  location: String,
  price: Number,
})
