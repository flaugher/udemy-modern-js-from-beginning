// Observers allow us to subscribe and unsubscribe to events.
// You can use it to notify the DOM that certain elements have been updated.
// For example, subscribe or unsubscribe to click events.
// This example is ES5 base object-oriented programming.

// EVENT OBSERVER
// Instantiate array to hold observer functions
function EventObserver() {
  this.observers = [];
}

// Define event observer's subscribe, unsubscribe, and fire functions
// Here, prototype is a property on an EventObserver object.
// See https://javascript.info/function-prototype
EventObserver.prototype = {

  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe: function (fn) {

    // Filter out from the list whatever matches the callback function.
    // If there is no match, the callback gets to stay on the list.
    // The filter returns a new list and reassigns the list of observers.
    // In other words, generate a new list that doesn't contain the function
    // being unsubscribed.

    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed to ${fn.name}`);
  },

  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

// INSTANTIATE EVENT OBSERVER INSTANCE
// Declare event observer object that can be instantiated when the user clicks a sub or unsubscribe button
const click = new EventObserver();

// EVENT LISTENERS
// When user clicks a subscribe or unsubscribe button, subscribe or unsubscribe to click handler
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// CLICK HANDLERS
// This is the function that gets run when a subscribe event occurs
const getCurrMilliseconds = function () {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

// This is the function that gets run when an unsubscribe event occurs
const getCurrSeconds = function () {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}

