// Observers allow us to subscribe and unsubscribe to events.
// You can use it to notify the DOM that certain elements have been updated.
// For example, subscribe or unsubscribe to click events.

function EventObserver() {
  this.observers = [];
}

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

// Event observer
const click = new EventObserver();

// Event listeners
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

// Click handlers
const getCurrMilliseconds = function () {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function () {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}

