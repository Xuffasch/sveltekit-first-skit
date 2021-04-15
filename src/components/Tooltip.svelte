<script>
  export let title;
  let isHovered = false;
  let x;
  let y;

  function mouseOver(event) {
    isHovered = true;
    x = event.pageX + 5;
    y = event.pageY + 5;
  }

  function mouseLeave() {
    isHovered = false;
  }

  function mouseMove(event) {
    x = event.pageX + 5;
    y = event.pageY + 5;
  }

</script>


<!-- 
  A Tooltip displays a text overlay on elements 
  that is pointed at with a mouse.
  As a slot cannot carry event handlers, we need to wrap the slot element provided by the parent in a div
-->
<div 
  on:mouseover={mouseOver} 
  on:mouseleave={mouseLeave} 
  on:mousemove={mouseMove}
  class="text"
>
  <slot />
</div>

{#if isHovered}
  <div class="tooltip" style="top: {y}px; left: {x}px;">{title}</div>
{/if}

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