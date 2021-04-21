<script>
	import { getContext, setContext } from 'svelte';
	export let path = "";
  console.log("MidFlight - value for context : ", path);
	let previousMessage = getContext(path);
	
	let message = "Half way"
	
	let errorContext = "error";
	let errorMessage = "I took the wrong plane !"
	
	setContext(errorContext, errorMessage);
  import Final from './Final.svelte';

  $: finalContext = errorContext === "" ? path : errorContext;
</script>

<p>
	<span style="text-decoration: underline;">Previous message</span> : {previousMessage}
</p>
{#if errorContext === ""}
<p>
	<span style="text-decoration: underline;">Current status</span> :
	{message}
</p>
{:else}
<p>
	<span style="text-decoration: underline;">Error </span> :
	{errorMessage}
</p>
{/if}

<Final path={finalContext}  />
