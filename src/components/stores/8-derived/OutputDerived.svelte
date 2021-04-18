<script>
  import { guessedNumber, correct } from './data-derived';
</script>

<div class='centering red'>
  <h3>8. Guessing game with derived store</h3>
  <label for="guess">
    Guess the number I have in mind ? 
    <input 
      id="guess" 
      type="number"
      bind:value={$guessedNumber}
    >
  </label>
  
	<p>
		 you guessed {$guessedNumber === null ? '' : $guessedNumber}
	</p>
  <p>

		<span 
			class:incorrect={$correct == 'incorrect'} 
			class:correct={$correct === 'correct'}
		>				
			{$correct === null ? "" : "You guessed " + $correct}
		</span>
	</p>
</div>

<style>
	.incorrect {
    color: red;
  }
  .correct {
    color: green;
  }
  .red { 
    margin: 0.5em;
    padding: 1em;
    background-color: lightblue;
    border-radius: 1em;
  }
</style>