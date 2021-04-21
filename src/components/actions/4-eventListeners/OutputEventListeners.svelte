<script>
  import blurOnEscape from './blurListener';
  import focusNextListener from './focusNextListener';
  let text1 = "";
  let text2 = "";
  let text3 = "";
  let input4, input5, input6;

  import secretListener from './secretListener';
  let SECRET="ArrowLeft,ArrowRight,ArrowLeft"; 
  let SECRET2="ArrowRight,ArrowLeft"
  let unlocked = false;
  let origin = 0;
  let unlock = (source) => {
    unlocked = !unlocked;
    origin = source;
  };
</script>

<div class="centering format-display red"> 
  <h3>5. Add actions to multiple elements</h3>

  <h5>Add blur on Escape to input elements</h5>
  <div style="display: flex; flex-wrap: wrap">
   <input use:blurOnEscape bind:value={text1} type="text"/> 
   <input use:blurOnEscape bind:value={text2} type="text"/>
   <input use:blurOnEscape bind:value={text3} type="text"/>
  </div>

  <h5>Add focus to the next element after entering text in one input element. Blur after the last element</h5>

  <div style="display: flex; flex-wrap: wrap">
    <input bind:this={input4} use:focusNextListener={input5} bind:value={text1} type="text"/> 
    <input bind:this={input5} use:focusNextListener={input6} bind:value={text2} type="text"/>
    <input bind:this={input6} use:focusNextListener bind:value={text3} type="text"/>
  </div>

  <div style="display: flex; align-items: baseline">
    <h5>Find the secret code</h5>
    {#if unlocked}
    <p style="margin-left: 2em;">You found the secret code {origin}!</p>
    {/if}
  </div>

  <div style="display: flex; flex-wrap: wrap">
    <div style="display: flex; flex-direction: column;">
      Code 1
      <input 
        use:secretListener={{
          id: 1, 
          SECRET, 
          unlock : unlock 
        }} 
        type="text" 
        style=" flex-basis: 50%">
    </div>
    <div style="margin-left: 2em; display: flex; flex-direction: column;">
      Code 2
      <input 
        use:secretListener={{
          id: 2, 
          SECRET: SECRET2, 
          unlock : unlock 
        }} 
        type="text" 
        style=" flex-basis: 50%">
    </div>

  </div>
  


</div>

<style>
  input {
    margin: 8px;
  }

</style>