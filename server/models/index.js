var Promise = require('bluebird');
var db = require('../db/index');

// var mysql = Promise.promisify(require('mysql'))
// var connection = require('../db/index')

module.exports = {
  messages: {
    get: function (message) {
      // connection.con.query('select messages from messages')
      //   .then(console.log(messages));
      db.con.connect();
      db.con.query('insert into messages (messages) values (message)');
      db.con.end();
      console.log('---------get model messages');
        
    }, // a function which produces all the messages
    post: function (body) {
      // connection.con.connect();
      // connection.con.query('insert into messages (messages) values(messageContent)')
      //   .then(console.log('wrote to database'))
      console.log('------ post model messages');
      return new Promise (function(resolve, reject) {
        db.con.query('insert into rooms (roomname) values ("' + body.roomname + '"); insert into messages (messages,userid,roomid) values ("' + body.message + '", select userid from users where (username = "'+body.username+'"),select roomid from rooms where (roomname = "'+body.roomname+'")', (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
        // db.con.query('insert into messages (messages) values ("' + body.message + '")', (err, data) => {
        //   if (err) {
        //     reject(err);
        //   } else {
        //     resolve(data);
        //   }
        // });
        // var test = (db.con.query('select * from users'));
        // console.log(test)
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.d
    get: function () {
      console.log('--------get model users');
    },
    post: function (userName) {
  
      return new Promise (function(resolve, reject) {
        db.con.query('insert if not exists into users (username) values ("' + userName + '")', (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
        // var test = (db.con.query('select * from users'));
        // console.log(test)
        
      });
    }
  }
};

