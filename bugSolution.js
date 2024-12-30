const express = require('express');
const app = express();
app.use((req, res, next) => {
  req.setTimeout(10000); // Set a 10-second timeout for requests
  next();
});
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
