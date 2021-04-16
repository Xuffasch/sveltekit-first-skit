<script>
  import { onMount } from 'svelte';
  import { writableStore } from './data-writable';

  let _value;

  onMount( () => {
    // The function given to the Svelte Writable store should take as input the stored value 'value' which will be used to update a local variable '_value', to be display in an element as an example below.
    return writableStore.subscribe( value => {
      _value = value + " and Chorizo Pizza !";
    })
  })

</script>

<p>I'd like to eat <em>{_value}</em></p>