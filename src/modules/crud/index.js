export function findById (model) {
  return async (req, res) => {
    const document = await model.findById(req.params.id)

    if (!document) {
      res.status(404).send('Not found')
      return
    }

    res.status(200).json(document)
  }
}

export function find (model) {
  return async (req, res) => {
    const documents = await model.find()

    res.status(200).json(documents)
  }
}
