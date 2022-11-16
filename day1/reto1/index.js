let mysql = require('mysql2')
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Colores2320001',
  database: 'codenotch'
})

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conection success');
  }
})