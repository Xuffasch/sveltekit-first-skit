<script>
  import Tooltip from '$components/Tooltip.svelte';
  import { tooltip } from '$lib/tooltip.js';
  import { tooltipC } from '$lib/tooltipWithComponent.js';
</script>

<svelte:head>
  <title>Svelte Action use cases study</title>
</svelte:head>

<h1 class='page-content'>Tooltip demo from Lin Hau Tan's</h1>
<a href="https://www.youtube.com/watch?v=0GqIoo66i0g" target="_blank">https://www.youtube.com/watch?v=0GqIoo66i0g</a>

<h2>Purpose of the Page</h2>
<p>3 implementations of custom tooltip using (from top to bottom):</p>
<ul style="list-style-type: square;">
  <li>a wrapping component</li>
  <li>an Action with hardcoded tooltip style</li>
  <li>an Action using a separate svelte component for easier customization</li>
</ul>

<div class="solutions">
  <Tooltip title="Tooltip with a wrapping component">
    <h2 class="try" >Hello from Tooltip Component !</h2>
  </Tooltip>

  <h2 class="try" data-title="Tooltip with simple action" use:tooltip>Hello from Tooltip Action !</h2>

  <h2 class="try" data-title="Tooltip with action using a separate component" use:tooltipC>Hello from Tooltip using Action with a separate Component</h2>

</div>

<style>
  .solutions {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .try {
    margin: 0.5em;
  }
</style>

