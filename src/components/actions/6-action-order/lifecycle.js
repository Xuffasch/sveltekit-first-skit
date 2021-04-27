export let somethingHasChanged = () => {
  this.elements.forEach(element => {
    element.style.outlineColor = 'red';

    setTimeout( () => {
      if (this.elements.has(element)) {
        element.style.outlineColor = "black";
      }
    }, 1000);
  })
};

export let elementHasMounted = () => {
  this.elements.forEach(element => {
    element.style.outline = '2x solid black';
  })
};
