// nodemon ../backend/index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
const port = 3001;

//mysqlと接続するための設定
const connection = mysql.createConnection({
    host: '172.18.0.2',
    port: '3306',
    user: 'root',
    password: 'project443',
    database: 'cm_db'
});

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/api', (req, res) => {
    // /apiにアクセスした際に、MySQLに対して行う処理
    connection.query(
        //usersテーブルからデータを取得する処理
        'SELECT * FROM commodities',
        function(err, results, fields){
            if(err){
                console.log('接続エラー');
                throw err;
            }
            res.json({message: results[0].names});
        }
    )
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
})