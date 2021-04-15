<script>
  import { writableStore } from './data-writable';
</script>

<label for="storedText">
  What would you like to eat ?
  <input 
    id="storedtext" 
    type="text"
    on:keyup="{ event => writableStore.set(event.target.value )}"
  >
</label>

<style>
  label {
    margin-top: 1.5em;
  }
  label input {
    margin-left: 0.5em;
  }
</style>