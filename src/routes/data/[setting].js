export async function get({ params }) {
  let demand = params;

  let res = [
    {
      category: 'Settings 1',
      description: "First setting description"
    },
    {
      category: 'Settings 2',
      description: "Second setting description"
    },
    {
      category: 'Settings 3',
      description: "Third setting description"
    },
    {
      category: 'Settings 4',
      description: "Fourth setting description"
    },
    {
      category: 'Settings 5',
      description: "Fifth setting description"
    },
  ];
  
  return {
    body: {
      requested: demand,
      r: res,
      count: res.length
    }
  }
}