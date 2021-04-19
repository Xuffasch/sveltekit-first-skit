
let displayData = (node, params) => {
  console.log('Action displayData is called by the node : ', node)
  console.log('data provided : ', params);

  return () => {
    console.log("Action displayData is removed");
  }
}

export default displayData;