/*
Name: Cole Stokes
This file sets up a basic JavaScript server where I can host my application.
Note: To run this on localhost, Node.js, npm, and Express.js must be installed on your device.
To start the server type "node server.js" in the command prompt.
*/

const express = require('express'); //Imports express.

const app = express(); //Creates an express app.

app.use(express.static('public_html')); //Uses the files within public_html.

const port = 80; //Set a port.
app.listen(port, () => { //Runs the server.
  console.log('Server has started!!');
});