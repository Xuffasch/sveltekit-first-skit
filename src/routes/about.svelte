<!-- Declare status and error props to silence warnings in the browser -->
<script>
  export let status;
  export let error;
</script>

<svelte:head>
	<title>About page for the first svelteKit app (Beta)</title>
</svelte:head>

<h1>About</h1>
<p>SvelteKit is awesome!</p>
<a href=".">Go back home</a>

<!-- Declare empty slot to silence warning in browser -->
<slot></slot>