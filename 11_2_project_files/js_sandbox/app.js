// Basic structure

// // This is called an "IIFE".  As written, this one runs right away.
// (function () {
//   // Declare private vars and functions.

//   return {
//     // Declare public vars and functions.
//   }

// })();


// // STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = 'Hello world!';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//  // This directly reveals the method inside the object.
//  // Note that this is more flexible then the revealing
//  // pattern as it allows you do to extra things like the
//  // console.log shown that aren't in your private method.
//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();


// REVEALING MODULE PATTERN
// I was actually using this pattern in the Username class I declared in my dynamic_dropdown /try/register js code.
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({ id: 1, name: 'Robert' });
// Now to go Chrome console and type "ItemCtrl.get(1)" to see what you added.

console.log(ItemCtrl.get(1));