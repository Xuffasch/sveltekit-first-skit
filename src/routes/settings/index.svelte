<script context="module">
	export async function load({ page, fetch, session, context}) {
		const { host, path, params, query } = page;

		console.log("host : ", host);
		console.log("params : ", params);
		console.log("query : ", query);
		console.log("path : ", path);

		const url = `/data/setting-set.js`;
		const res = await fetch(url);
		const results = await res.json();
		console.log("SETTINGS fetch result : ", results); 

		if (res.ok) {
			const { requested, r, count } = results;

			return {
				props: {
					requested: requested,
					res: r,
					count: count
				}
			}
		}
	}

</script>

<script>
	export let res;
	export let status, error;
</script>

<svelte:head>
	<title>SvelteKit (Beta) Nested Pages and Menu use cases study</title>
</svelte:head>

<h1 class="page-content">Nested Page and submenu</h1>

<h2>Purpose of this page</h2>
<p>Retrieve and display data from an endpoint</p>
<p>Display a subset of "settings" pages (profile, notifications) acessible with its own menu</p>


<ul class="display-items">
	{#each res as setting}
		<li>
			<div>
				<h2>{setting.category}</h2>
				<p>{setting.description}</p>
			</div>
		</li>
	{/each}
</ul>

<slot></slot>
