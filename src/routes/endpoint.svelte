<script context="module">
	export async function load({ page, fetch, session, context }) {
		const { host, path, params, query } = page;

		console.log("host : ", host);
		console.log("params : ", params);
		console.log("query : ", query);
		console.log("path : ", path);

		const url = `/data/home/usage-principals.js`;
		const res = await fetch(url);
		const results = await res.json();
		console.log("fetch result : ", results); 

		if (res.ok) {
			const { requested, kind, result, count } = results;

			return {
				status: 200,
				error: null,
				props: {
					requested: requested,
					kind: kind,
					features: result, 
					count: count
				}
			}
		}
	}


</script>

<!-- Declare status and error props to silence warnings in the browser -->
<script>
	export let status, error;
	export let requested, kind, features, count;
</script>

<svelte:head>
	<title>Welcome to my svelteKit (Beta) homepage</title>
</svelte:head>

<h1>Load data from deep endpoint</h1>

<h2>Purpose of this page</h2>
<p>Retrieve and display data from an endpoint set in /src/routes/data/home/</p>

<ul class="display-items">
	{#each features as feat}
		<li>
			<div>
				<h2>{feat.useCase}</h2>
				<p>{feat.description}</p>
			</div>
		</li>
	{/each}
</ul>

<!-- Declare empty slot to silence warning in browser -->
<slot></slot>

