const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//express specific stuff
app.use('/static', express.static('static'))//for serving static files


//pug specific stuff
//set the template engine as pug
appset('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'))

//our pug demo endpoint
/*app.get("/demo", (req, res)=>{
     res.status(200).render('demo',{title:'Hey Sru', message:'Hello there'})
});

app.get("/",(req, res)=>{
    res.status(200).send("This is homepage of my first express app with harry")

});

app.get("/about",(req, res)=>{
    res.send("This is about first express app with harry")

});

app.get("/this",(req, res)=>{
    res.status(404).send("This page is not found on my web cwh");

});*/

//endpoints
app.get('/',(req,res)=>{
    const con="This is the best content on the internet so far so use it widely"
    const params = {'title':'PubG is the best game',"content":con}
    res.status(200).render('index.pug',params);

})

//start the server

app.listen(port, ()=>{
    console.log(`The application started succsesfully on port ${port}`)
})