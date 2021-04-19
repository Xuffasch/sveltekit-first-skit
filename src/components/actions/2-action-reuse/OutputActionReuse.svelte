<script>
  let num = 1

  function counter(element, step) {
    let count = 0;
    updateText();

    function updateText() {
      element.innerHTML = count;
    }

    function onClick() {
      count += step;
      updateText();
    }

    element.addEventListener('click', onClick);
    return {
      update(newStep) {
        step = newStep;
      },
      destroy() {
        element.removeEventListener('click', onClick)
      }
    }
  }
</script>




<div class="centering format-display yellow"> 
  <h3>3. Multiple use of the same action</h3>

  <div style=" display: flex">
    <input bind:value={num} type="number"/>
    <!-- Using the same action multiple times wil multiple scope so that the counter are independently stored -->
    <button use:counter={num} style="margin-left: 1em; padding: 0.5em 1em"/> 
    <button use:counter={num} style="margin-left: 1em; padding: 0.5em 1em"/>
    <button use:counter={num} style="margin-left: 1em; padding: 0.5em 1em"/>
  </div>

</div>