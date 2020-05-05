const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handle bars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sara Cruz'
    })
})
app.get('/about', (req, res) => {
    res.render("about", {
      title: "About me",
      name: "Sara Cruz",
    });
})
app.get('/help', (req, res) => {
    res.render("help", {
      title: "Help",
      message: 'Hi! How can I help you?',
      name: "Sara Cruz"
    });
})

app.get('/help/*', (req, res) => {
      res.render("help*", {
      title: "Help article not found",
      name: "Sara Cruz",
    });
})

app.get('*', (req, res) =>{
    res.render("404page", {
      title: "Page not found",
      name: "Sara Cruz",
    });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.');  
})