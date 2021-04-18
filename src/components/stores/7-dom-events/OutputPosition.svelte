<script>
  import readableMousePosition from './data-dom-events';
</script>

<div>
  <div class="info">Window(X, Y) : <br> {$readableMousePosition.x}, {$readableMousePosition.y}</div>
  <div class='info'>Page(Y) : {$readableMousePosition.totalY}</div>
</div>


<style>
  .info {
    font-size: 0.7em;
    margin-left: 1em;
  }
</style>