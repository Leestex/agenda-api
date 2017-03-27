import express from 'express'

import User from './model'
import * as crud from '../crud'

const router = express.Router()

router.get('/:id', crud.findById(User))
router.get('/', crud.find(User))

export default router
