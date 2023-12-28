const express = require('express');
const app = express();

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },

    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    },

    {
        name:'Nintendo Switch Joy-Con',
        color: 'orange',
        readyToEat: false
    }
];

module.exports= fruits
 