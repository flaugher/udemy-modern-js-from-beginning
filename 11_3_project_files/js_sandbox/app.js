
const Singleton = (function () {
  let instance;

  // PRIVATE

  function createInstance() {
    const object = new Object({ 'name': 'Robert' });
    return object;
  }

  // PUBLIC API (just like the Module pattern!)
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
// This returns true because the Singleton will always return the same instance.
// To create another unique object, you'd have to create a new singleton.
console.log(instanceA === instanceB);