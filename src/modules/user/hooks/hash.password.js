import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export default async function hashPassword (next) {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  }
  next()
}
