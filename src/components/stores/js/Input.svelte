<script>
  import { update } from "./data.js"
</script>

<label for="storedText">
  Tell us what you think of this app
  <input 
    id="storedtext" 
    type="text"
    on:keyup="{ event => update(event.target.value)}"
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