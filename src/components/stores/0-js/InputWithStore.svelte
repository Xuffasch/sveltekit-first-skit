<script>
  import Input from './Input.svelte';
  import Mid from './Mid.svelte';
  import Output2 from './Output2.svelte';
</script>

<section class="centering blue">
  <h3>1. implementation with vanilla JS</h3>
  <Input />
  <Mid />
  <Output2 />
</section>

<style>
  .blue { 
    margin: 0.5em;
    padding: 1em;
    background-color: lightblue;
    border-radius: 1em;
  }

  .blue > h3 {
    text-align: center;
  }

</style>