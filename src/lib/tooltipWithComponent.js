import Tooltip from '$components/TooltipForAction.svelte'

export function tooltipC(element) {
  let tooltipComponent;

  function mouseOver(event) {
    tooltipComponent = new Tooltip({
      props: {
        title: element.dataset.title,
        x: event.pageX,
        y: event.pageY
      },
      target: document.body
    });
  }

  function mouseLeave() {
    tooltipComponent.$destroy();
  }

  function mouseMove(event) {
    tooltipComponent.$set({
      x: event.pageX,
      y: event.pageY
    })
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