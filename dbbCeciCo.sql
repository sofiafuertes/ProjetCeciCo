CREATE DATABASE cecico ; 
USE cecico;
CREATE TABLE users (
id_users INT PRIMARY KEY AUTO_INCREMENT,
name_user VARCHAR (50) NOT NULL,
first_name_user VARCHAR(50) NOT NULL,
mail_user VARCHAR(100) NOT NULL UNIQUE, 
password_user VARCHAR(50) NOT NULL
);
CREATE TABLE collection_product (
id_collectionProduct INT PRIMARY KEY AUTO_INCREMENT,
collection_type VARCHAR(100) NOT NULL
);
CREATE TABLE product(
id_product INT PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR (100) NOT NULL UNIQUE, 
product_price DECIMAL (10,2) NOT NULL, 
product_description TEXT NOT NULL, 
id_collectionProduct INT , FOREIGN KEY (id_collectionProduct)  REFERENCES collection_product (id_collectionProduct) ON DELETE CASCADE
);
CREATE TABLE comments (
id_comments INT PRIMARY KEY AUTO_INCREMENT, 
comment_content VARCHAR(255) NOT NULL, 
comment_date DATETIME, 
id_users INT, FOREIGN KEY (id_users) REFERENCES users (id_users) ON DELETE CASCADE,
id_product INT, FOREIGN KEY (id_product) REFERENCES product (id_product) ON DELETE CASCADE
);
CREATE TABLE love (
id_product INT, 
id_user INT
);


CREATE TABLE banning(
id_banning INT PRIMARY KEY AUTO_INCREMENT,
banning_date DATETIME,
id_banned_user INT,
id_administrator INT
);