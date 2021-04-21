<script>
  import secretCode from './customEventAction';
  let unlocked = false;
  let SECRET="ArrowRight,ArrowLeft"
  let returnMessage = ""
  let unlocksuccess = (e) => 
    { 
      unlocked = !unlocked;
      returnMessage = e.detail.message;
    }
</script>

<div class="centering format-display blue">
  <h3>6. Send custom events with actions </h3>
  <div style="display: flex; align-items: baseline;">
    <label for="code">
      <input 
        id='code' 
        type='text' 
        use:secretCode={{ id: 1, SECRET }} 
        on:unlocksuccess={ unlocksuccess }
        style="margin-top: 1em; margin-bottom: 1em;"
      />
    </label>
    {#if unlocked}
      <p style="margin-top: 1em; margin-bottom: 1em;">{returnMessage}</p>
    {/if}
  </div>




</div>