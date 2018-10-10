"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var promise = node_fetch_1.default('https://jsonplaceholder.typicode.com/todos/1');
promise
    .then(function (res) { return res.json(); })
    .then(function (todo) {
    throw new Error('uh oh');
    return todo;
})
    .then(function (todo) { return console.log('😛', todo.title); })
    .catch(function (err) { return console.error('😭', err); });
console.log('🥪 Synchronous');
//# sourceMappingURL=1-consume-promise.js.map