const connection = require('../database')

const getMarks = (req, res) => {
  let sql;
  if (req.query.id) {
    sql = `SELECT * FROM marks WHERE mark_id = ${req.query.id}`
  } else {
    console.log('hey');
    sql = 'SELECT * FROM marks'
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
const getAvg = (req, res) => {
  let sql;
  if (req.query.id) {
    sql = `SELECT AVG(mark) as AVG FROM marks WHERE mark_id = ${req.query.id}`
  } else {
    console.log('hey');
    sql = 'SELECT AVG(mark) as AVG FROM marks GROUP BY student_id'
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

const getStudentList = (req, res) => {
  let sql;
  if (req.query.id) {
    sql = `SELECT first_name, last_name, title FROM students AS s JOIN marks AS m ON (s.student_id = m.student_id) JOIN subjects AS sub ON (m.subject_id = sub.subject_id) WHERE s.student_id = ${req.query.id}`
  } else {
    console.log('hey');
    sql = 'SELECT first_name, last_name, title FROM students AS s JOIN marks AS m ON (s.student_id = m.student_id) JOIN subjects AS sub ON (m.subject_id = sub.subject_id)'
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
const getTeacherList = (req, res) => {
  let sql;
  if (req.query.id) {
    sql = `SELECT first_name, last_name, title FROM teachers AS t JOIN subject_teacher AS st ON (t.teacher_id = st.teacher_id) JOIN subjects AS sub ON (st.subject_id = sub.subject_id) WHERE t.teacher_id = ${req.query.id}`
  } else {
    sql = 'SELECT first_name, last_name, title FROM teachers AS t JOIN subject_teacher AS st ON (t.teacher_id = st.teacher_id) JOIN subjects AS sub ON (st.subject_id = sub.subject_id)'
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
const postMarks = (req, res) => {
  let sql;
  let answer;
  let mark = { student_id: req.body.student_id, subject_id: req.body.subject_id, date: req.body.date, mark: req.body.mark }
  if (mark != null) {
    console.log(req.body);
    sql = `INSERT INTO marks (student_id,subject_id,date,mark) VALUES (\"${mark.student_id}\", \"${mark.subject_id}\", \"${mark.date}\", \"${mark.mark}\")`
    answer = { error: false, code: 200, message: 'Mark posted', result: mark }
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

const putMarks = (req, res) => {
  let answer;
  let sql;
  let mark = { mark_id: req.body.mark_id, student_id: req.body.student_id, subject_id: req.body.subject_id, date: req.body.date, mark: req.body.mark }
  if (mark != null) {
    console.log(req.body);
    sql = `UPDATE marks SET student_id = \"${mark.student_id}\", subject_id = \"${mark.subject_id}\", date = \"${mark.date}\", mark = \"${mark.mark}\" WhERE mark_id = \"${mark.mark_id}\"`
    answer = { error: false, code: 200, message: 'Mark updated', result: mark }
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

const deleteMarks = (req, res) => {
  let answer;
  let sql;
  let mark_id = req.body.mark_id
  if (mark_id != null) {
    sql = `DELETE FROM marks WHERE mark_id = ${mark_id}`
    answer = { error: false, code: 200, message: `Mark widh ID ${mark_id} was deleted`, result: mark_id }
  } else answer = { error: true, code: 200, message: `Mark with ID ${mark_id} doesn't exist`, result: mark_id }

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

module.exports = { getMarks, getAvg, getStudentList, postMarks, putMarks, deleteMarks, getTeacherList }