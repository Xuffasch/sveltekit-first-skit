<script>
  import { onMount } from 'svelte';
  import { value, subscribe } from './data.js';

  let _value = value;

  // This output component subscribe to the store by using its content differently from Output.svelte
  onMount( 
    () => {
      return subscribe( () => {
        _value = value + "!!!!!! But it's that or nothing"
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
