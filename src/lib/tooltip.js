export function tooltip(element) {
  let div; 
  
  function mouseOver(event) {
    div = document.createElement('div');
    div.textContent = element.dataset.title;
    div.style = `
      position: absolute;
      left: ${event.pageX + 5}px;
      top: ${event.pageY + 5}px;
      padding: 4px;
      border: 1px solid #ccc;
      background-color: white;
      border-radius: 4px;
      box-shadow: 1px 1px 1px #888;
    `;
    document.body.appendChild(div)
  }

  function mouseLeave() {
    document.body.removeChild(div);
  }

  function mouseMove(event) {
    div.style.top = `${event.pageY + 5}px`;
    div.style.left = `${event.pageX + 5}px`;
  }

  element.addEventListener('mouseover', mouseOver);
  element.addEventListener('mousemove', mouseMove);
  element.addEventListener('mouseleave', mouseLeave);

  return {
    destroy() {
      element.removeEventListener('mouseover', mouseOver);
      element.removeEventListener('mousemove', mouseMove);
      element.removeEventListener('mouseleave', mouseLeave);
    }
  }
}