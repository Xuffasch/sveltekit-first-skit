<script>
	let valueBeforeAction = '';
	let valueAfterAction = '';
	
	function uppercase(element) {
		function onInput(event) {
			element.value = element.value.toUpperCase();
		}
		element.addEventListener('input', onInput);
		return {
			destroy() {
				element.removeEventListener('input', onInput);
			}
		}
	}
</script>

<div class="centering format-display blue"> 
  <h3>7. The order of actions matters</h3>
  <p>Run this example with different browsers. At the time of addition of this example, Firefox has a different behavior for the case when the the input value is bound to the state before the action</p>
  <label for="before">
    <input
    id="before"
	  bind:value={valueBeforeAction}
    use:uppercase
  />
  </label>

  <div>Value bound before action - no uppercase : {valueBeforeAction}</div>

  <div style="height: 12px"></div>

  <label for="after">
    <input
    id="after"
    use:uppercase
    bind:value={valueAfterAction} 
  />
  </label>


  <div>Value bound after action - uppercase visible : {valueAfterAction}</div>  

</div>


