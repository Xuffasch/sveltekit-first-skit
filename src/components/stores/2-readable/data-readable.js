import { readable } from 'svelte/store';

// Readable store cannot be updated. In this example, the initial value is "" then after the subscriber is added, the function given as the second argument is called et the store can be updated as we pass it the set function used to update the store in writable store
export let readableValue = readable(
  "", 
  // This function is not called with additional subscribers or when their number goes down to 0
  (set) => {
    console.log("I'll be back !") // This message can check in the browser console
    let timeId = setTimeout( () => {
      set("I'm here !")
    }, 2000)

    // The returned function is called when the number of subscribers goes to 0
    return () => {
      clearTimeout(timeId)
      console.log("I'm outta here !") // This message can be checked in the browser console
    };
  }
);