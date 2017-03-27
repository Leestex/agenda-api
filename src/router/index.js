const express = require('express')

const users = require('../modules/user').router

const router = express.Router()

router.use('/users', users)

module.exports = router
