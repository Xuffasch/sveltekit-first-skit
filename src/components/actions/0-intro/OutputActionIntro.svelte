<script>
  import { writable } from 'svelte/store';
  import displayAction from './actions-data';

  let typed = writable("Bonjour");
</script>

<div class="centering format-display blue"> 
  <h3>1. Simple action with passing parameters</h3>

  <label for="hello">
    Say hello in your language 
    <input id='hello' type="text" bind:value={$typed}> 
  </label>

  <p use:displayAction={$typed}>Hello in your language is {$typed}</p> 
</div>

