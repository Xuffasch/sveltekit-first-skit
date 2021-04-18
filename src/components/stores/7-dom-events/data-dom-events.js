import { readable } from 'svelte/store';

export default readable(
  {
    x: 0,
    y: 0, 
    totalY: 0
  },
  (set) => {
    document.addEventListener('mousemove', move);
    function move(event) {
      set({
        x: event.clientX,
        y: event.clientY,
        totalY: event.pageY
      })
    }
    
    return () => document.removeEventListener('mousemove', move);
  }
)



