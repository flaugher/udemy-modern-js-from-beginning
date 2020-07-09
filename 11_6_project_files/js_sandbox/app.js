/**
 * A mediator mediates between objects.
 * An example would be a chat room.
 * See these articles on creating chat rooms:
 * - t.ly/zJiM
 */

// CONSTRUCTORS
// Note that constructors and prototypes of indicators that this is an ES5 module.  Brad suggests writing your JS this
// way instead of with classes because this is what ES6 transpiles down to.  Use this method as you learn JS.

/**
 * A user is the thing being mediated.
 */

const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

// A user can send messages to a receive messages from other users.
User.prototype = {
  send: function (message, to) {
    // 'this' refers to a user instance
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

/**
 * The chatroom is the mediator.
 */

const Chatroom = function () {
  // List of users
  let users = {};

  // Chatrooms can be instantiated ('register') and they send messages between users.
  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Broadcast
        for (user in users) {
          if (users[user] !== from) {
            users[user].receive(message, from);
          }
        }
      }
    }
  }
}

/**
 * Run module
 */

// Create users.
const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

// Create a chatroom.
const chatroom = new Chatroom();

// Register users with the chatroom.
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

// Users send messages to one or more other users in the chatroom in which they're registered.
brad.send("Hello Jeff", jeff);
sara.send("Hello Brad", brad);
jeff.send("Hello everyone");