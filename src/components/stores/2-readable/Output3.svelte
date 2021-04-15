<script>
  import { onMount } from 'svelte';
  import { readableValue } from './data-readable.js';

  let _value = "";

  onMount( () => {
    return readableValue.subscribe( value => {
      _value = value
    })
  })
</script>

<p>Where are you ? <em>{ _value }</em></p>

<style>
  em {
    color: red;
    font-weight: 500;
  }
  
</style>