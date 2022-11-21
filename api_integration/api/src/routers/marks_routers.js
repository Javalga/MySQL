const { Router } = require("express")
const router = Router()
const marksCtrl = require('../controller/marks_controller')

router.get('/marks', marksCtrl.getMarks)
router.get('/avg', marksCtrl.getAvg)
router.get('/studentList', marksCtrl.getStudentList)
router.get('/teacherList', marksCtrl.getTeacherList)

router.post('/marks', marksCtrl.postMarks)

router.put('/marks', marksCtrl.putMarks)

router.delete('/marks', marksCtrl.deleteMarks)

module.exports = router