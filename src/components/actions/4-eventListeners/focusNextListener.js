/**  Remind that this Action function takes 2 parameters :
 * - 1st parameter: the element that uses this action, in this case, it is the input element we are going to use
 * - 2nd parameter: the Action function parameter (use an object or an array to provide multiple parameters), in this case, we are going to give the next input element to put the focus on.
*/
let focusNextListener = (current, next) => {
  let selectNext = (event) => {
    if (event.key == 'Enter') {
      if (next) {
        next.focus();
      } else {
        event.currentTarget.blur();
      }
    }
  }

  current.addEventListener("keydown", selectNext);  
  return {
    update(newTarget) {
      next = newTarget
    },
    destroy() {
      current.removeEventListener("keydown", selectNext);
    }
  } 
}

export default focusNextListener;