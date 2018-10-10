import { getFruit } from './3-async-await';

const fruits = ['peach', 'pineapple', 'strawberry'];

const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

const fruitInspection = async () => {
  if ((await getFruit('peach')) === '🍑') {
    console.log('looks peachy!');
  }
};

import fetch from 'node-fetch';

const getTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  const { title, userId, body } = await res.json();

  console.log(title, userId, body);
};
