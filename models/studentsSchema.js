var mongoose = require('mongoose')
const { stringify } = require('querystring')

var appSchema = mongoose.Schema

var StudentSchema = new appSchema({


	FullName: String,
	Email: String,
	Faculty: String,
	BirthDate: String,
	Grades:[{
	Date: String,
	Grade: Number,
	_id: false
    }]
})

module.exports = mongoose.model('students', StudentSchema)
