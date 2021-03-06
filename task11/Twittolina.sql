CREATE DATABASE IF NOT EXISTS Twittolina;
USE Twittolina;

DROP TABLE POST;
DROP TABLE USER;

CREATE TABLE USER
(
	USER_ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	NAME VARCHAR(200) NOT NULL
);

CREATE TABLE POST
(
	POST_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	USER_ID BIGINT NOT NULL,
	DESCRIPTION VARCHAR(200) NOT NULL,
	CREATED_AT DATETIME NOT NULL,
	PHOTO_LINK VARCHAR(10000) DEFAULT NULL,
	LIKES INT DEFAULT NULL,
	FOREIGN KEY (USER_ID) REFERENCES USER (USER_ID)
);

INSERT USER (USER_ID, NAME)
VALUES
(1, 'user1'),
(2, 'user2'),
(3, 'user3'),
(4, 'user4'),
(5, 'user5'),
(6, 'user6'),
(7, 'user7'),
(8, 'user8'),
(9, 'user9'),
(10, 'user10');

INSERT POST (POST_ID, DESCRIPTION, CREATED_AT, PHOTO_LINK, LIKES, USER_ID)
VALUES
(1001, 'hello', '2020-03-01 20:57:00', 'www.picture.ru', 101, 1),
(1002, 'hello2', '2020-03-01 21:46:00', NULL, 102, 2),
(1003, 'hello3', NOW(), NULL, 103, 1),
(1004, 'how are you?', '2020-03-01 14:37:00', NULL, 101, 2),
(1005, 'hey?', NOW(), NULL, 101, 1),
(1006, 'My name is Polina', '2020-05-10 20:55:00', NULL, 101, 2),
(1007, 'hello', NOW(), NULL, 101, 1),
(1008, 'hello', '2020-05-15 08:57:00', NULL, 101, 7),
(1009, 'hello', '2020-05-3 20:15:00', NULL, 101, 2),
(1010, 'hello', NOW(), NULL, 101, 1);