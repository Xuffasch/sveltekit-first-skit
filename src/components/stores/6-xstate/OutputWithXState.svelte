<script>
  import { interpret, matchesState } from 'xstate';
  import { toggleMachine } from './data-xstate';

  let current;

  const toggleService = interpret(toggleMachine)
    .onTransition((state) => {
      current = state;
      console.log("xstate current state : ", state);
    })
    .start();
</script>

<div class="centering blue">
  <h3>7. Switching state with XState machine and retrieve new state data</h3>
  <button on:click="{ () => toggleService.send('TOGGLE')}" >
    What is the answer to everything ?
  </button>
  
  <p>{current.matches('inactive') ? "" : "Javascript of course !"}</p>
</div>

<style>
  .blue { 
    margin: 0.5em;
    padding: 1em;
    background-color: lightblue;
    border-radius: 1em;
  }
</style>