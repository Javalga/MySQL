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

let sql = ""

// connection.query(sql, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// })