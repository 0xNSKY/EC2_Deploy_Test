const app = require('express')();

app.use('/', (req, res) => {
    res.send("Hello World Node Server!");
})
.listen(5000, () => {
    console.log('Server on Port 5000');
})