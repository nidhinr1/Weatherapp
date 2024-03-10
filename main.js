const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set 'public' directory as the static folder for serving images
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
