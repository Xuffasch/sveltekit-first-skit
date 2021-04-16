<script>
  import { onMount } from 'svelte';
  import { readableData } from './data-contract';

  let _value = "Hello";
  let seconds = 10;

  onMount( () => {
    let intervalId = setInterval(
      () => seconds == 0 ? seconds = 0 : --seconds
    , 1000);

    let timeId = setTimeout(
      () => _value = $readableData
    , 10000)

    return () => {
      clearTimeout(timeId)
      clearInterval(intervalId);
    };
  });

</script>

<h5>The following message reads from a Readable store to appear 10s after the page loads.</h5>
<p>{seconds} seconds remaining</p>
<p>Message : {_value} !</p>