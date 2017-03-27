import express from 'express'
import Event from './model'

const router = express.Router()

router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id)

  if (!event) {
    res.status(404).send('Not found')
    return
  }

  res.status(200).json(event)
})

router.get('/', async (req, res) => {
  const events = await Event.find()

  res.status(200).json(events)
})

export { router, Event }
