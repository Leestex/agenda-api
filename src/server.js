const express = require('express')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')

const log = require('./modules/logger')

const app = express()

app.use(helmet())
app.use(morgan('tiny', { stream: log.stream }))

app.listen(config.get('server.port'), () => {
  log.info(`Server is running on ${config.get('server.port')} port`)
})
