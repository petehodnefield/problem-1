let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log("Hello World")
})

app.listen(3001, () => {
    console.log("Hello World")
})

































 module.exports = app;
