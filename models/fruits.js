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
    },

    {
        name:'Street Fighter Turbo Champion Legacy',
        color: 'orange',
        description: 'Logitech G29 Driving Force Steering Wheel for PS5 | PS4 | PS3 | PC'
    }
    
];

module.exports= fruits
 