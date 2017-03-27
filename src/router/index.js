import express from 'express'

import { router as users } from '../modules/user'

const router = express.Router()

router.use('/users', users)

export default router
