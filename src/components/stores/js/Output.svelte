<script>
  import { onMount } from 'svelte';
  import { value, subscribe } from './data.js';

  let _value = value;

  // onMount executes a function with an arrow function '() => {_value = value}' that gives back the return of the subscribe function. As the subscribe function returns a function to unsubscribe the arrow function from the store, memory leak is avoided 
  onMount( 
    () => {
      return subscribe( () => {
        _value = value
      })
    }
  )
</script>

<p>I think this app is <em>{_value}</em></p>

<style>
  em { 
    color: #ff3e00;
  }  
</style>
