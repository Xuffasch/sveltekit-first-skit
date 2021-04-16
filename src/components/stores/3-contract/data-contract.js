import { writable, readable } from 'svelte/store'

export let writableData = writable("OK");

export let readableData = readable(
  "Hello", 
  (set) => {
    set("Hello Svelties !")
    return () => console.log("That's all folks !")
})