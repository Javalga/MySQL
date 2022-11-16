let mysql = require('mysql2')
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'codenotch'
})

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conection success');
  }
})

// reto1
let sql = "ALTER TABLE teachers DROP COLUMN modality;"

let sql2 = "ALTER TABLE subjects ADD COLUMN onemore VARCHAR(45) NULL AFTER content"

let sql3 = "DROP TABLE students;"