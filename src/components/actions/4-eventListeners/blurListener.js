let blurOnEscape = (element) => {
  let changeFocus = (event) => {
    if (event.key === 'Escape') {
      element.blur();
    }
  }
  
  element.addEventListener('keydown', changeFocus);
  return {
    destroy() {
      element.removeEventListener('keydown', changeFocus);
    }
  }
}

export default blurOnEscape;