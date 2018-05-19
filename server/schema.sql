CREATE DATABASE chat;


USE chat;

CREATE TABLE users (
  /* Describe your table here.
  
  mysql -u student -p <schema.sql
  
  */
  userid int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (userid)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  /* Describe your table here.*/
  roomid int NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (roomid)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messages varchar(255),
  userid int NOT NULL,
  roomid int NOT NULL,
  FOREIGN KEY (userid) REFERENCES users (userid),
  FOREIGN KEY (roomid) REFERENCES rooms (roomid)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

