<script>
  import OutputIntro from '$components/actions/0-intro/OutputActionIntro.svelte';

  import OutputDyn from '$components/actions/1-dynamic/OutputActionDyn.svelte';

  import OutputReuse from '$components/actions/2-action-reuse/OutputActionReuse.svelte';

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