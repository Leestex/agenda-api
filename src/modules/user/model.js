import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
})

schema.pre('save', async function preSave (next) {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  }
  next()
})

schema.method('validPassword', function validPassword (password) {
  return bcrypt.compare(password, this.password)
})

schema.method('toJSON', function serialize () {
  const obj = this.toObject()
  delete obj.password

  return obj
})

export default mongoose.model('User', schema)
