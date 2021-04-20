let secretListener = (node, {SECRET, unlock}) => {
  let keys = [];
  let timeId;
  
  let checkSecret = (event) => {
    keys.push(event.key);
    console.log(SECRET);
    console.log(keys);

    if (keys.join(',') === SECRET) {
      unlock();
    }

    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => {
      timeId = null;
      keys = [];
    }, 1000)
  }

  node.addEventListener('keydown', checkSecret);
  return {
    destroy() {
      node.removeEventListener('keydown', checkSecret);
    }
  }
}

export default secretListener;