import { createStore } from 'redux'

function reducer (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Redux store enhancer has a signature of createStore(reducer, initState) => createStore(reducer, initState)
// The store enhancer changes the createStore function to create store objects with additional functions that can be called.
// To create a Redux store respecting the Svelte store contract, our createStore function returns a Redux store object with the additional 'subscribe' function which should implement the same behaviour as the store we have implemented until now.
function svelteStoreEnhancer( reduxCreateStore ) {
  return function (reducer, initialState) {
    const reduxStore = reduxCreateStore(reducer, initialState);
    return {
      ...reduxStore,
      subscribe(fn) {
        fn(reduxStore.getState());

        return reduxStore.subscribe( () => {
          fn(reduxStore.getState());
        })
      }
    } 
  }
}

export default createStore(reducer, svelteStoreEnhancer);