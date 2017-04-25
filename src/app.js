import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import router from './router'
import log from './modules/logger'

const app = express()

app.use(helmet())
app.use(morgan('tiny', { stream: log.stream }))
app.use(router)

export default app
