CREATE DATABASE createtb_db;
USE createtb_db;

CREATE TABLE IF NOT EXISTS students
(student_name varchar(100) not null, 
student_id varchar(100) not null unique,
email varchar(100) not null, 
password varchar(128) not null, 
admin bool not null,
PRIMARY KEY (student_id))DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS categories
(category_id int not null auto_increment, 
category_name varchar(50) not null,
PRIMARY KEY (category_name))DEFAULT CHARSET=utf8 COLLATE=utf8_bin;