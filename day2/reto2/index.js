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

let sql1 = "SELECT student_id, mark FROM students, marks WHERE student_id BETWEEN 1 AND 20 OR mark > 8 AND date BETWEEN 2020 - 12 - 31 AND 2021 - 12 - 31;"
let sql2 = "SELECT subject_id,AVG(mark) FROM marks GROUP BY subject_id"
let sql3 = "SELECT student_id,(mark) FROM marks WHERE date BETWEEN 2022-01- 01 AND 2022-12-31 GROUP BY student_id;"