let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "codenotch2"
    }
);

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection succeed");
    }
})

let sql1 = "SELECT first_name, last_name, title FROM students JOIN subjects ON (student_id = subject_id);"
let sql2 = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (subject_teacher.teacher_id = teachers.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id);"
let sql3 = "SELECT teachers.first_name,teachers.last_name, title, COUNT(students.student_id) FROM teachers JOIN subject_teacher ON (subject_teacher.teacher_id = teachers.teacher_id) JOIN subjects ON(subject_teacher.subject_id = subjects.subject_id) JOIN codenotch2.groups ON(subject_teacher.group_id = codenotch2.groups.group_id) JOIN students ON(codenotch2.groups.group_id = students.group_id) GROUP BY title;"
// connection.query(sql, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// })