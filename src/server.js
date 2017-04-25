import config from 'config'
import mongoose from 'mongoose'
import Promise from 'bluebird'

import app from './app'
import log from './modules/logger'

mongoose.Promise = Promise

mongoose.connect(config.get('database.mongodb.uri'))

app.listen(config.get('server.port'), () => {
  log.info(`Server is running on ${config.get('server.port')} port`)
})
