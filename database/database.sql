CREATE DATABASE cm_db;
USE cm_db;

CREATE TABLE IF NOT EXISTS students
(id varchar(100) not null unique,
names varchar(100) not null, 
emails varchar(100) not null, 
passwords varchar(128) not null, 
admin bool not null,
PRIMARY KEY(id))DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS categories
(id int not null auto_increment, 
names varchar(50) not null,
PRIMARY KEY(id,names))DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS commodities
(id int not null auto_increment,
names varchar(50) not null,
states varchar(50) not null DEFAULT '貸出可能',
categories_id int not null, 
categories_names varchar(50) not null,
FOREIGN KEY(categories_id, categories_names) REFERENCES categories(id, names),
PRIMARY KEY(id))DEFAULT CHARSET=utf8 COLLATE=utf8_bin;