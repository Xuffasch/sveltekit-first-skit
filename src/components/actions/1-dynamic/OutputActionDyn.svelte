<script>
  import dataDisplay from './actions-dyn-params';
  import { writable } from 'svelte/store';

  let typed = writable("");
</script>

<div class="centering format-display red"> 
  <h3>2. Simple action with dynamic parameters</h3>

  <label for="hello">
    Say hello in your language 
    <input id='hello' type="text" bind:value={$typed}> 
  </label>

  <p use:dataDisplay={$typed}>Hello in your language is {$typed}</p> 
</div>