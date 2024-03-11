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

CREATE TABLE IF NOT EXISTS commodities
(commodity_id int not null auto_increment,
commodity_name varchar(50) not null,
borrower_name varchar(100),
category_id int not null auto_increment, 
category_name varchar(50) not null,
fk_category_id(category_id) REFERENCES categories (category_id) ,
fk_category_name(category_name) REFERENCES categories (category_name),
fk_borrower_name(borrower_name) REFERENCES students (student_name),
PRIMARY KEY (commodity_name))DEFAULT CHARSET=utf8 COLLATE=utf8_bin;