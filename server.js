// REQUIREMENTS
const express = require('express');
const app = express();


let burgers = ['hamburger', 'cheeseburger', 'veggie burger']
let tacos = ['crunchy taco', 'soft taco', 'super taco']

// MIDDLEWARE
app.use(express.static('public'));

// ROUTES
app.get("/", (request, response) => {
	response.send('Hello, World');
});

app.get("/api/burgers", (request, response) => {
	//send back the response 'burgers'
	response.json({'burgers':burgers});
});

app.get("/pick-a-color/:color", (request, response) => {
  response.send( "You picked " + request.params.color );
});


// SERVER START
app.listen(3000, () => {
  console.log("HTTP server listening at localhost:3000");
});