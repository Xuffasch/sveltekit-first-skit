<!-- Declare status and error props to silence warnings in the browser -->
<script>
	import '../app.css';
	import Nav from '$components/Nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>