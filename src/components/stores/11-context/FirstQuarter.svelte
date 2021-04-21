<script>
	import { getContext, setContext } from 'svelte';
	export let path = ""
  console.log("FirstQuart - value for context : ", path);
	let message = "2,5 hours of flight and 8 more to go !"
	
	let previousMessage = getContext(path);
	
	setContext(path, message);
	import MidFlight from './Midflight.svelte';
</script>

<h4>
  First Quarter
</h4>
<p>
	<span style="text-decoration: underline;">Previous message</span> : {previousMessage}
</p>
<p>
	<span style="text-decoration: underline;">Current status</span> :
	{message}
</p>

<h4>
	MidFlight
</h4>
<MidFlight path={path}/>