<!-- Declare status and error props to silence warnings in the browser -->
<script>
  export let status;
  export let error;
</script>

<svelte:head>
	<title>About page for the first svelteKit app (Beta)</title>
</svelte:head>

<h1>Svelte Kit (beta) for learning</h1>
<p>This app is a compilation of svelte3 codes to learn the framework</p>

<h2>Purpose of this page</h2>
<p>Create a simple page using a single file in the routes</p>

<!-- Declare empty slot to silence warning in browser -->
<slot></slot>