export async function get({ params }) {
  let { use, kind } = params;
  console.log("use : ", use);
  console.log('kind :', kind);

  let res = [
    {
      useCase: 'Use Case 1',
      description: "First use case description"
    },
    {
      useCase: 'Use Case 2',
      description: "Second use case description"
    },
    {
      useCase: 'Use Case 3',
      description: "Third use case description"
    },
  ];
  
  return {
    body: {
      requested: use,
      kind: kind,
      result: res,
      count: res.length
    }
  }
}