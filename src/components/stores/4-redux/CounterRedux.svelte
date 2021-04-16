<script>
import { onMount } from 'svelte';
import store from './redux';
import svelteReduxStore from './reduxWithSvelteEnhancer.js';
let value = store.getState();

onMount(() => {
  return store.subscribe( () => {
    value = store.getState()
  });
})

</script>

<div class="centering red">
  <h3>5. Implementation with Redux Store</h3>

  <div>
    <button on:click="{ () => store.dispatch({type: 'DECREMENT'}) }" style=""> - </button>
    <p>Value of the redux counter : {value}</p>
    <button on:click="{ () => store.dispatch({type: 'INCREMENT'}) }" style=""> + </button>
  </div>

  <div style="margin-top: 1em">
    <button on:click="{ () => svelteReduxStore.dispatch({type: 'DECREMENT'}) }" style=""> - </button>
    <p>Value of the enhanced redux store counter : {$svelteReduxStore}</p>
    <button on:click="{ () => svelteReduxStore.dispatch({type: 'INCREMENT'}) }" style=""> + </button>
  </div>

</div>

<style> 
  .red {
    margin: 0.5em;
    padding: 1em;
    border-radius: 1em;
    background-color: rgb(228, 163, 163)
  }
  div {
    display: flex;
    justify-content: center;
  }
  p {
    text-align: center;
  }
  button {
    font-size: large;
    padding: 1em 1em;
  }
</style>
