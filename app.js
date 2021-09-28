const express = require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser:true});
const port = 80;

//define mongoose schema

var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    age: String,
    address: String
});

var contact = mongoose.model('Contact',contactSchema);


//Express specific stuff
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded())

//Pug specific stuff
app.set('view engine', 'pug') //set the templates engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{


    const params = { }
    res.status(200).render('home.pug', params);
})

// ENDPOINTS
app.get('/contact', (req, res)=>{

    const params = { }
    res.status(200).render('contact.pug', params);
})

//post request

app.post('/contact', (req, res)=>{

    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This data is saved in database")
    }).catch(()=>{
        res.status(400).send("Item was not saved in database")
    });
  //  res.status(200).render('contact.pug');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

