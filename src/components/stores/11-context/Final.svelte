<script>
	import { getContext } from 'svelte';
  export let path = "";
  console.log("Final - value for context : ", path);
  let message;
  let previousMessage = getContext(path, message);

  let label = path.indexOf("error") !== -1 ? "Error" : "Landing"; 
	
  let messageLabel = `<span style='text-decoration: underline; '>${label}</span>`;

</script>

<h4>Final</h4>
<p>
  {@html messageLabel} {previousMessage}
</p>