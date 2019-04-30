"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
const people = [
    {
        id: 1,
        name: 'Peter'
    },
    {
        id: 2,
        name: 'Rachel'
    },
    {
        id: 3,
        name: 'John'
    },
    {
        id: 4,
        name: 'Tim'
    },
    {
        id: 5,
        name: 'Zed'
    }
];
let tim = lodash.find(people, (item) => item.id === 4);
console.log(tim);
let tim2 = lodash.find(people, { id: 4 });
