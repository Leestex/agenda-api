import express from 'express'

import Event from './model'
import * as crud from '../crud'

const router = express.Router()

router.get('/:id', crud.findById(Event))
router.get('/', crud.find(Event))

export default router
