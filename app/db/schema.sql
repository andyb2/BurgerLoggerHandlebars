CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(100),
eaten BOOLEAN
);