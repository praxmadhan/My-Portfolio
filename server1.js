// Import the express module
const express = require('express');
const fs=require('fs');
const path=require('path');

// Create an instance of express
const app = express();

app.use(express.static(path.join(__dirname,'./')))

// Define a route for the root URL
app.get( (req, res)=> {
  res.sendFile(path.join(__dirname,'Index.html'));
});

// Start the server and listen on port 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
