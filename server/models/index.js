var db = require('../db/index');
var Promise = require('bluebird')
// var mysql = Promise.promisify(require('mysql'))
// var connection = require('../db/index')

module.exports = {
  messages: {
    get: function () {
      // connection.con.connect();
      // connection.con.query('select messages from messages')
      //   .then(console.log(messages));
        
        console.log('---------get model messages')
        
    }, // a function which produces all the messages
    post: function (messageContent) {
      // connection.con.connect();
      // connection.con.query('insert into messages (messages) values(messageContent)')
      //   .then(console.log('wrote to database'))
      console.log('------ post model messages')
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('--------get model users')
    },
    post: function (username) {
      // console.log(username);
      db.con.connect();
      db.con.query('insert into users (username) values (username)');
      db.con.end();
    }
  }
};

