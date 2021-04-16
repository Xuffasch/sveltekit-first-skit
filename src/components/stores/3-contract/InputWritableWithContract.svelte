<script>
  import { writableData } from './data-contract';
</script>

<input on:keyup="{(e) => $writableData = e.target.value}" />