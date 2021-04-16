<script>
  import InputW from './InputWritableWithContract.svelte';
  import OutputW from './OutputWritableWithContract.svelte';
  import OutputR from './OutputReadable.svelte'; 
</script>

<div class='centering blue'>
  <h3>4. Reading from a Svelte Writable and Readable store by contract <em>$store</em></h3>
  <InputW />
  <OutputW />
  <OutputR />
</div>

<style>
  .blue { 
    margin: 0.5em;
    padding: 1em;
    background-color: lightblue;
    border-radius: 1em;
  }
</style>