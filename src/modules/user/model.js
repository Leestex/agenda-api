import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import schema from './schema'
import hooks from './hooks'

schema.pre('save', hooks.hashPassword)

schema.method('validPassword', function validPassword (password) {
  return bcrypt.compare(password, this.password)
})

schema.method('toJSON', function serialize () {
  const obj = this.toObject()
  delete obj.password

  return obj
})

export default mongoose.model('User', schema)
