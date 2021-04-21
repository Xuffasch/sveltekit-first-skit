let secretCode = (node, {id, SECRET }) => {
  let secret = [];
  let timeId;

  let checkSecret = (event) => {
    secret.push(event.key);

    if (secret.join(',') === SECRET ) {
      node.dispatchEvent(new CustomEvent('unlocksuccess', { 
        detail: {
          message: `You found password ${id}, again!`,
        }
      }))
    }

    if (timeId) clearTimeout(timeId)
    timeId = setTimeout(() => {
      timeId = null;
      secret = []; 
    }, 1000);
  }

  node.addEventListener('keydown', checkSecret);
  return {
    destroy() {
      node.removeEventListener('keydown', checkSecret);
    }
  }
}

export default secretCode;