// Value stored, maintained and exposed by data.js
export let value = "super cool";

// function to update the stored value
export function update(newValue) {
  value = newValue;

  // When the value is updated, run all the functions that have subscribed to the store
  subscribers.forEach(fn => {
    fn();
  })
}

// Internal variable to store all the functions (or subscribers) that should run whenever the exposed data by data.js 'value' is updated
let subscribers = [];

// A subscription is a function that needs the value stored by data.js and needs to be run whenever 'value' is updated
export function subscribe(fn) {
  subscribers.push(fn);

  // The returned function should be used by subscribing components, classes... to remove the subscribing functions from the internal variable 'subscribers'.
  // This avoid memory leak when the subscribing component, class is unmounted, removed from memory.
  return function unsubscribe(fn) {
    subscribers.splice(subscribers.indexOf(fn), 1)
  }
}