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

// let sql1 = "UPDATE * FROM marks SET mark = 0;"
// let sql2 = "SELECT first_name, last_name FROM students;"
// let sql3 = "SELECT * from codenotch2.teachers;"
// let sql4 = "DELETE FROM marks WHERE date < 2012-11-16;"



// dia 2

let sql1 = "SELECT AVG(mark) FROM marks WHERE subject_id = 1;"
let sql2 = "SELECT COUNT(*) FROM students;"
let sql3 = "SELECT * FROM  groups;"
let sql4 = "DELETE FROM marks WHERE date < 2022-1-1 AND date > 2020-12-1 AND mark > 5;"
let sql5 = "SELECT * FROM students WHERE admission BETWEEN 2021 - 12 - 31 AND 2022 - 12 - 31;"
let sql6 = "SELECT subject_id, COUNT(teacher_id) FROM subject_teacher GROUP BY subject_id"
// connection.query(sql, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// })