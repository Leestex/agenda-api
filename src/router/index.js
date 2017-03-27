import express from 'express'

import { router as users } from '../modules/user'
import { router as events } from '../modules/event'

const router = express.Router()

router.use('/users', users)
router.use('/events', events)

export default router
