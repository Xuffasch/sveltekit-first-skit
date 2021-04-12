<!-- Declare status and error props to silence warnings in the browser -->
<script>
	import Counter from '$lib/Counter.svelte';
	export let status;
	export let error;
</script>

<svelte:head>
	<title>Welcome to my svelteKit (Beta) homepage</title>
</svelte:head>

<h1>Hello world!</h1>

<Counter />

<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>

<a href="about">Go to About page</a>

<!-- Declare empty slot to silence warning in browser -->
<slot></slot>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
