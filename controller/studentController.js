var express = require('express')
var appRouter = express.Router()
var studentsBL = require('../models/studentsBL')


appRouter.route('/').get(async(req,resp) => {
    var students = await studentsBL.getAllStudents()
    return resp.json(students)
})

appRouter.route('/:id').get(async(req,resp) => {
    var id = req.params.id
    var student = await studentsBL.getStudentById(id)
    return resp.json(student)
})

appRouter.route('/').post(async(req, resp) => {
    var studentObj = req.body
    var student = await  studentsBL.addStudent(studentObj)
    return resp.json(student)
})

appRouter.route('/:id').put(async(req, resp) => {
    var id = req.params.id
    var studentObj = req.body
    var result = await studentsBL.updateStudent(id, studentObj)
    return resp.json(result)
})

appRouter.route('/:id').delete(async(req,resp) => {
    var id = req.params.id
    var result = await studentsBL.deleteStudent(id)
    return resp.json(result)
})

module.exports = appRouter