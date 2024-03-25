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
router.get('/select', (req, res) => {
    const sql = 'SELECT * FROM commodities';
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
//commodities追加
router.post('/insert', (req, res) => {
    const { name, categories_id, categories_name } = req.body;
    const sql = 'INSERT INTO commodities(names, categories_id, categories_names) VALUES (?,?,?)';
    connection.query(sql, [ name, categories_id, categories_name], (err, result) => {
      if (err) throw err;
      res.send(`commoditiy added with ID: ${result.insertId}`);
    });
  });

//commodities編集
router.put('/update/:id', (req, res) => {
    const comId = req.params.id;
    const { name, cid, cname} = req.body;
    const sql = 'UPDATE commodities SET name = ?, cid = ?, cname = ? WHERE id = ?';
  
    connection.query(sql, [name, cid, cname, comId], (err, result) => {
      if (err) throw err;
      console.log(`commodities with id ${comId} updated`);
      res.send(`commodities with id ${comId} updated`);
    });
  });

//commodities借用
router.put('/borrow/:id', (req, res) => {
    const commoditiesId = req.params.id;
    const {states} = req.body;
    const sql = 'UPDATE commodities SET states = ? WHERE id = ?';
  
    connection.query(sql, [states, commoditiesId], (err, result) => {
      if (err) throw err;
      console.log(`commodities with id ${commoditiesId} updated`);
      res.send(`commodities with id ${commoditiesId} updated`);
    });
  });

//消去
router.delete('/delete/:id', (req, res) => {
    const commoditiesId = req.params.id;
    const sql = 'DELETE FROM commodities WHERE id = ?';
  
    connection.query(sql, [commoditiesId], (err, result) => {
      if (err) throw err;
      console.log(`commodities with id ${commoditiesId} deleted`);
      res.send(`commodities with id ${commoditiesId} deleted`);
    });
  });