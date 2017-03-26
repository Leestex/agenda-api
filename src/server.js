const express = require('express')
const config = require('config')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.listen(config.get('server.port'), () => {
  console.info(`Server is running on ${config.get('server.port')} port`)
})
