<script>
  import { onMount } from 'svelte';
  import value from './data-valtio.js';
  import { snapshot, subscribe } from 'valtio/vanilla';

  let _value = snapshot(value);

  onMount( () => {
    return subscribe(value, () => {
      _value = snapshot(value);
    });
  });

  import data, { valtioSvelteStore } from './data-valtio-svelte';

  const valtioBySvelteStore = valtioSvelteStore(data);

</script>

<div class="centering yellow">
  <h3>6. Implementation with Valtio Store</h3>
  <h4>Using valtio syntax</h4>
  <div class="horizontal">
    <button on:click="{ () => --value.count.value }">-</button>
    <p>{_value.count.value}</p>
    <button on:click="{ () => ++value.count.value }">+</button>
  </div>
  
  <h4>Using Svelte store contract syntax</h4>
  <div class="horizontal">
    <button on:click="{ () => --data.counting.accumulator }">-</button>
    <p>{$valtioBySvelteStore.counting.accumulator}</p>
    <button on:click="{ () => ++data.counting.accumulator }">+</button>
  </div>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
  .yellow {
    margin: 0.5em;
    padding: 1em;
    border-radius: 1em;
    background-color: rgb(241, 238, 19)
  }
  button {
    margin: auto;
    padding: 1em;
    align-self: stretch;
  }
</style>
