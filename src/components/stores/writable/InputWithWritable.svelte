<script>
  import Input from './Input.svelte';
  import Output from './Output.svelte';
</script>

<section class="centering red">
  <h3>2. implementation with Svelte writable Store</h3>
  <Input />
  <Output />
</section>

<style>
    .red { 
    margin: 0.5em;
    padding: 1em;
    background-color: rgb(228, 163, 163);
    border-radius: 1em;
  }
</style>