// require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const froots = require('./models/fruits')
const Fruit = require('./models/fruit')
// const mongoose = require('mongoose');



app.set("view engine","jsx")
// --> Gives ViewEngine
app.engine("jsx", require("express-react-views").createEngine())
// --> Initializes ViewEngine

// Define a route to render the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

app.use(express.urlencoded({extended:false}));
// --> Parse URLencoded responses [req.body*]

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// --> Intercept reqRes proccess and manage dataFlow

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });

// ---------------------------------[Middleware]


app.get('/fruits', (req,res)=>{
    res.render('Index', {
        fruits: froots
    })
})
// ----------------------------------[Index (R)]

app.get('/fruits/new',(req,res)=>{
    res.render('New')
})
// --------------------------------------[New]

app.post('/fruits',(req,res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true; 
    } else { 
        req.body.readyToEat = false; 
    }
    froots.push(req.body)
    // ---> Add New Fruit to Existing DataSet
    console.log(req.body)
    res.redirect('/fruits')
})
// ----------------------------------[POST (C)]


app.get('/fruits/:indexOfFruitsArray', (req,res)=>{
    res.render('Show',{
        fruit: froots[req.params.indexOfFruitsArray]
    })
})
// ----------------------------------[Show]



app.listen(3000,()=>{
    console.log("Toyserver running")
})