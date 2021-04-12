<script>
  export let status;
  export let error;
</script>

<h1>{status}</h1>
<p>Something went wrong !</p>
<pre>{error.stack}</pre>

<slot />