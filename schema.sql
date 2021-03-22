-- Creates the database for the social media app 
DROP DATABASE IF EXISTS coffee_spies; 
CREATE DATABASE coffee_spies; 

-- Creates a new user that will be able to access the database using the provided password "Password123!"
CREATE USER 'coffee_spies_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Password123!';
GRANT ALL PRIVILEGES ON coffee_spies.* TO 'coffee_spies_user'@'localhost';

-- Uses the socialmedia app database 
USE coffee_spies; 

-- Table number 1 - Tasks 
CREATE TABLE user (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    username VARCHAR(50) UNIQUE NOT NULL, 
    `password` VARCHAR(255) NOT NULL, 
    email_address VARCHAR(255) NOT NULL, 
);

-- Table number 2 - Posts 
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    uploader_id INT NOT NULL, 
    title VARCHAR(50) NOT NULL, 
    thumbnail_url VARCHAR(255) NOT NULL, 
    post_url VARCHAR(255) NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW() 
    FOREIGN KEY (uploader_id) REFERENCES users(id)
);

-- Table number 3 - Comments 
CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL, 
    post_id INT NOT NULL, 
    `message` VARCHAR(255) NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW() 
    FOREIGN KEY (user_id) REFERENCES users(id), 
    FOREIGN KEY (post_id) REFERENCES posts(id), 
); 

-- Table number 4 - Likes 
CREATE TABLE likes (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    user_id INT NOT NULL, 
    post_id INT NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW() 
    FOREIGN KEY (user_id) REFERENCES users(id), 
    FOREIGN KEY (post_id) REFERENCES posts(id), 
);