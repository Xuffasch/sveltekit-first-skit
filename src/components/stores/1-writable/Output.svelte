<script>
  import { onMount } from 'svelte';
  import { writableStore } from './data-writable';

  let _value;

  onMount( () => {
    return writableStore.subscribe( value => {
      _value = value + " and Chorizo Pizza !";
    })
  })

</script>

<p>I'd like to eat <em>{_value}</em></p>