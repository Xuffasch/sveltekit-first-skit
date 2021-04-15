<script>
  export let x, y, title;
</script>

<div 
  class="tooltip" 
  style="
    left: {x + 5}px;
    top: {y + 5}px;
  "
>
  {title}
</div>

<style>
  .tooltip {
    position: absolute;
    padding: 4px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 4px;
    box-shadow: 1px 1px 1px #888;
  }
</style>