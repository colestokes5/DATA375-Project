const express = require('express');

const app = express();

app.use(express.static('public_html'));

const port = 80;
app.listen(port, () => {
  console.log('Server has started!!');
});