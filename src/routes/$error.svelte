<!-- Declare status and error props to silence warnings in the browser -->
<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>The requested page cannot be loaded</title>
</svelte:head>

<h1>{status}</h1>
<p>Something went wrong !</p>
<pre>{error.stack}</pre>

<!-- Declare empty slot to silence warning in browser -->
<slot />