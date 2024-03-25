const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

//mysqlと接続するための設定
const connection = mysql.createConnection({
    host: '172.18.0.2',//テスト環境
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
  
//commodities追加
router.post('/', (req, res) => {
    const { name, categories_id, categories_name } = req.body;
    const sql = 'INSERT INTO commodities(names, categories_id, categories_names) VALUES (?,?,?)';
    connection.query(sql, [ name, categories_id, categories_name], (err, result) => {
      if (err) throw err;
      res.send(`commoditiy added with ID: ${result.insertId}`);
    });
  });