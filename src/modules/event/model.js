import mongoose from 'mongoose'

const schema = mongoose.Schema({
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

export default mongoose.model('Event', schema)
