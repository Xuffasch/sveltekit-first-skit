import { writable, derived } from 'svelte/store';

const sourceNumber = 3;

export const guessedNumber = writable(null);

export const correct = derived(guessedNumber, ($num, set) => {
  console.log('New guess number : ', $num);

  let timeId = setTimeout( () => {
    $num == null 
		? set(null) 	
		: $num == sourceNumber ? set('correct') : set('incorrect');
  }, 1500)

	return () => clearTimeout(timeId);
}, null);