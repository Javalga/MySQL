const { Router } = require("express")
const router = Router()
const studentsCtrl = require('../controller/students_controller')

router.get('/students', studentsCtrl.getStudents)

router.post('/students', studentsCtrl.postStudent)

router.put('/students', studentsCtrl.putStudent)

router.delete('/students', studentsCtrl.deleteStudent)

module.exports = router