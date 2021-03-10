const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send("Hello World Node Server!");
})

app.listen(5000, () => {
    console.log('Server on Port 5000');
})