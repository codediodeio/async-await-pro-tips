import fetch from 'node-fetch';


const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/5')

    const { id, userId, title } = await res.json();

    console.log(id, userId, title)
}

getTodo();