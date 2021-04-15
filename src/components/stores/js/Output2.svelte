<script>
  import { onMount } from 'svelte';
  import { value, subscribe } from './data.js';

  // As the onMount lifecycle function does not run on server side rendered components, the addition to the value also has to be put here for the first load of the app
  let _value = value + " !!!!!! But it's that or nothing";

  // This output component subscribe to the store by using its content differently from Output.svelte
  onMount( 
    () => {
      return subscribe( () => {
        _value = value != "" ? value + " !!!!!! But it's that or nothing" : value
      })
    }
  )
</script>

<p>I think this app is <em>{_value}</em></p>

<style>
  em { 
    color: blue;
  }  
</style>
