let mysql = require("mysql2")
let connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "codenotch2"
  }
);


let sql1 = "UPDATE * FROM marks SET mark = 0"
let sql2 = "SELECT first_name, last_name FROM students;"
let sql3 = "SELECT * from codenotch2.teachers"
let sql4 = "DELETE FROM marks WHERE date < 2012-11-16"
// connection.query(sql, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// })