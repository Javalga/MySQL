const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "codenotch2"
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conection succeed.');
  }
})

module.exports = connection;