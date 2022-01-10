var express = require('express')
var appRouter = express.Router()
var authBL = require('../models/authBL')


appRouter.route('/').post(async (req, resp) => {
    var checkUser = req.body
    var answer = await authBL.checkLogin(checkUser)
    return resp.json(answer)
})

module.exports = appRouter
