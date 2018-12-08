// Basic
export const getFruit = async name => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑',
    strawberry: '🍓'
  };

  return fruits[name];
};

getFruit('peach').then(console.log);

// Async + Await

export const makeSmoothie = async () => {
  const a = await getFruit('pineapple');
  const b = await getFruit('strawberry');

  return [a, b];
};

const makeSmoothie2 = () => {
  let a;
  return getFruit('pineapple')
    .then(v => {
      a = v;
      return getFruit('strawberry');
    })
    .then(v => [a, v]);
};
