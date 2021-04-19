<script>
  import flatpickr from 'flatpickr'

  function calendar(element, configs) {
    let cal = flatpickr(element, configs);

    return {
      update(newConfigs) {
        flatpickr(element, newConfigs);
      },
      destroy() {
        cal.destroy();
      }
    }
  }
</script>


<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</svelte:head>

<div class="format-display blue">
  <h3>3. Integrate with UI library </h3>
  <button style="padding: 1em 0.5em" use:calendar={{ showMonths : 2 }}>Date Picker</button>
</div>

<style>
  .format-display {
    height : 8em;
    width: 80%;
  }

</style>