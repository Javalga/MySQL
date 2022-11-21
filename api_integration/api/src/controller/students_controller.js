const connection = require('../database')


const getStudents = (req, res) => {
  let sql;
  if (req.query.id) {
    sql = `SELECT * FROM students WHERE student_id = ${req.query.id}`
  } else {
    sql = 'SELECT * FROM students'
  }
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Query done');
      console.log(result);
    }
    res.send(result)
  })

}

const postStudent = (req, res) => {
  let sql;
  let answer;
  let student = { first_name: req.body.first_name, last_name: req.body.last_name, admission: req.body.admission, group_id: req.body.group_id }
  if (student != null) {
    console.log(req.body);
    sql = `INSERT INTO students (first_name,last_name,admission,group_id) VALUES (\"${student.first_name}\", \"${student.last_name}\", \"${student.admission}\", \"${student.group_id}\")`
    answer = { error: false, code: 200, message: 'Student posted', result: student }
  } else {
    console.log('Error to create');
    answer = { error: true, code: 200, message: 'Error to create' }
  }
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      answer = err
    } else {
      console.log('Query done');
      console.log(result);
    }
    res.send(answer)
  })
}

const putStudent = (req, res) => {
  let answer;
  let sql;
  let student = { student_id: req.body.student_id, first_name: req.body.first_name, last_name: req.body.last_name, admission: req.body.admission, group_id: req.body.group_id }
  if (student != null) {
    console.log(req.body);
    sql = `UPDATE students SET first_name = \"${student.first_name}\", last_name = \"${student.last_name}\", admission = \"${student.admission}\", group_id = \"${student.group_id}\" WhERE student_id = \"${student.student_id}\"`
    answer = { error: false, code: 200, message: 'Student updated', result: student }
  } else {
    console.log('Please fill all the inputs');
    answer = { error: true, code: 200, message: 'Please fill al the inputs' }
  }
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      answer = err
    } else {
      console.log('Query done');
      console.log(result);
    }
    res.send(answer)
  })
}

const deleteStudent = (req, res) => {
  let answer;
  let sql;
  let student_id = req.body.student_id
  if (student_id != null) {
    sql = `DELETE FROM students WHERE student_id = ${student_id}`
    answer = { error: false, code: 200, message: `Student widh ID ${student_id} was deleted`, result: student_id }
  } else answer = { error: true, code: 200, message: `Student with ID ${student_id} doesn't exist`, result: student_id }

  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      answer = err
    } else {
      console.log('Query done');
      console.log(result);
    }
    res.send(answer)
  })
}

module.exports = { getStudents, postStudent, putStudent, deleteStudent }