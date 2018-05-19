var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //res.send --> all messages on database
       // console.log('------get controller messages')
       // console.log('messages get:', req)
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //add message to message table,
        //if user exist, then assign it userID
        //if user doesn't exist, then add it to user table and assign the new user Id in message table
      // console.log('messages post:', req)
      // console.log('-----post controller messages')
      
      
    } // a function which handles posting a message to the database
      //write to database message table
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //look up
      // console.log('user get:', req)
      // console.log('--------get controller users')
    },
    post: function (req, res) {
      //if user is already in user table,
        //nothing
      //else,
        //add user to user table
      console.log('user post:', req.body.username)
      // console.log('----------controller post fn')
      models.users.post(req.body.username);
    }
  }
};

