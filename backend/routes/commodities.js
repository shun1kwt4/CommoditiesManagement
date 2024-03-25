const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

//mysqlと接続するための設定
const connection = mysql.createConnection({
    host: '172.18.0.2',
    port: '3306',
    user: 'root',
    password: 'project443',
    database: 'cm_db'
});

//commoditiesテーブル取得
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM commodities';
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // 新規ユーザーの作成
  router.post('/', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    connection.query(sql, [name, email], (err, result) => {
      if (err) throw err;
      res.send(`User added with ID: ${result.insertId}`);
    });
  });