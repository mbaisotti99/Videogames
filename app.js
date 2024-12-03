const express = require("express");
const app = express();
const port = 3000;
const gamesRouters = require("./routers/videogames");

app.use("/videogames", gamesRouters);


app.get('/', (req, res) => {
    res.json('Hello world');
});

app.listen(port, () => {
    console.log('server è partito');
    
});