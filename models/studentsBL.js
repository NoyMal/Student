var Student = require('./studentsSchema')

var getAllStudents = () => {
    return new Promise((resolve, reject) => {
        Student.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

var getStudentById = (studentId) => {
    return new Promise((resolve, reject) => {
        Student.findById(studentId, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

var addStudent = (newStudent) => {
    return new Promise((resolve, reject) => {
        var student = new Student({
            FullName: newStudent.FullName,
            Email: newStudent.Email,
            Faculty: newStudent.Faculty,
            BirthDate: newStudent.BirthDate,
            Grades: []
         })   
            student.save((err)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve("Student was created !")
                }
            })  
    })
}

var updateStudent = (studentId, newStudent) => {
    return new Promise((resolve, reject) => {
        Student.findByIdAndUpdate((studentId),{
            FullName: newStudent.FullName,
            Email: newStudent.Email,
            Faculty: newStudent.Faculty,
            BirthDate: newStudent.BirthDate,
            Grades: newStudent.Grades
        },(err) =>{
            if(err){
                reject(err)
            }
            else{
                resolve("Student was updated ! ")
            }
        })
    })
}


var deleteStudent = (studentId) =>{
    return new Promise((resolve, reject) => {
        Student.findByIdAndDelete(studentId, (err) => {
            if(err){
                reject(err)
            }
            else{
                resolve("Student has ben deleted")
            }
        })
    })
}

module.exports = {getAllStudents,getStudentById,addStudent,updateStudent,deleteStudent}