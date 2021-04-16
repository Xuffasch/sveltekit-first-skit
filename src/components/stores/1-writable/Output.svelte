<script>
  import { onMount } from 'svelte';
  import { writableStore } from './data-writable';

  let _value;

  onMount( () => {
    // The function given to the Svelte Writable store should take as input the stored value 'value' which will be used to update a local variable '_value', to be display in an element as an example below.
    // the Svelte store API returns a function when we subscribe to the writableStore. That function is used to unsubscribe the provided function from the store and avoid memory leak.
    // Since the unsubscribe function is returned to the unMount function, it will be called when this component is unmounted which effectively unsubscribe the input function from the store.
    return writableStore.subscribe( value => {
      _value = value + " and Chorizo Pizza !";
    })
  })

</script>

<p>I'd like to eat <em>{_value}</em></p>