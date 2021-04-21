<script>
	import { setContext } from 'svelte';
	let message = "I'm going on board of my plane for Singapore !"
	let journey = "whereami";
	setContext(journey, message);
  console.log("Departure - value for context : ", journey);
	
	import FirstQuarter from './FirstQuarter.svelte';
</script>

<div class="centering format-display red">
  <h3>12. Passing Text through context</h3>
  
  <h4>
    Departure
  </h4>
  <p>
    {message}
  </p>
  
  <FirstQuarter path={journey}/>
</div>

<style>
  p {
    align-self: start;
  }
</style>