import express from 'express'
import config from 'config'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'
import Promise from 'bluebird'

import router from './router'
import log from './modules/logger'

mongoose.Promise = Promise

const app = express()

app.use(helmet())
app.use(morgan('tiny', { stream: log.stream }))
app.use(router)

mongoose.connect(config.get('database.mongodb.uri'))

app.listen(config.get('server.port'), () => {
  log.info(`Server is running on ${config.get('server.port')} port`)
})
