let displayData = (node, params) => {
  console.log('Action displayData is called by the node : ', node)
  console.log('data provided : ', params);

  return {
    update(params) {
      console.log('data provided has changed ; ', params)
    },
    destroy() {
      console.log("Action displayData is removed");
    }
  }
}

export default displayData;