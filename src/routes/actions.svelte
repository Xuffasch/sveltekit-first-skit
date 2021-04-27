<script>
  import OutputIntro from '$components/actions/0-intro/OutputActionIntro.svelte';

  import OutputDyn from '$components/actions/1-dynamic/OutputActionDyn.svelte';

  import OutputReuse from '$components/actions/2-action-reuse/OutputActionReuse.svelte';

  import OutputUI from '$components/actions/3-add-ui/OutputWithUI.svelte';

  import OutputEventListeners from '$components/actions/4-eventListeners/OutputEventListeners.svelte';

  import OutputCustomEvents from '$components/actions/5-customEvents/OutputCustomEvents.svelte';

  import OutputActionOrder from '$components/actions/6-action-order/OutputActionOrder.svelte';

</script>


<svelte:head>
  <title>SvelteKit (beta) Actions use cases study</title>
</svelte:head>

<h1 class="page-content">
  Showcase Tan Li Hau's Youtube video Actions series
</h1>
<a href="https://www.youtube.com/playlist?list=PLoKaNN3BjQX3Gl14MBygFf8buPIw9pAeK">
  Tan Li Hau - Svelte Actions
</a>

<OutputIntro />

<OutputDyn />

<OutputReuse />

<OutputUI />

<OutputEventListeners />

<OutputCustomEvents />

<OutputActionOrder />
