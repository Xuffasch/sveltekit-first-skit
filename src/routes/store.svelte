<script>
  import InputText from '$components/stores/0-js/InputWithStore.svelte';

  import InputText2 from '$components/stores/1-writable/InputWithWritable.svelte';

  import OutputText from '$components/stores/2-readable/OutputWithReadable.svelte';
</script>

<svelte:head>
  <title>SvelteKit (beta) Store use cases study</title>
</svelte:head>

<h1>SvelteKit : Stores</h1>
<h2>Purpose of the Page</h2>
<p>Tryout Stores following Li Hau Tan's Youtube videos</p>
<a href="https://www.youtube.com/watch?v=QjMl4usaKGA&list=PLoKaNN3BjQX3fG-XOSwsPHtnV8FUY6lgK&index=1" target="_blank">Li Hau Tan - Svelte Store: The Introduction</a>

<InputText />

<InputText2 />

<OutputText />
