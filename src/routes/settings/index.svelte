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
	<title>Settings page</title>
</svelte:head>

<h1>Settings Page</h1>

<ul>
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
