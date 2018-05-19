var Promise = require('bluebird');
var db = require('../db/index');

// var mysql = Promise.promisify(require('mysql'))
// var connection = require('../db/index')

module.exports = {
  messages: {
    get: function (message) {
      // connection.con.connect();
      // connection.con.query('select messages from messages')
      //   .then(console.log(messages));
      db.con.connect();
      db.con.query('insert into messages (messages) values (message)');
      db.con.end();
      console.log('---------get model messages');
        
    }, // a function which produces all the messages
    post: function (messageContent) {
      // connection.con.connect();
      // connection.con.query('insert into messages (messages) values(messageContent)')
      //   .then(console.log('wrote to database'))
      console.log('------ post model messages');
      db.con.connect();
      return new Promise (function(reject, resolve) {
        db.con.query('insert into messages (messages) values ("' + messageContent + '")', (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
        // var test = (db.con.query('select * from users'));
        // console.log(test)
        db.con.end();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('--------get model users');
    },
    post: function (userName) {
  
      db.con.connect();
      return new Promise (function(reject, resolve) {
        db.con.query('insert into users (username) values ("' + userName + '")', (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
        // var test = (db.con.query('select * from users'));
        // console.log(test)
        db.con.end();
      });
    }
  }
};

