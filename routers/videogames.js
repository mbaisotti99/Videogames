const express = require("express");
const router = express.Router();
const gamesList = require("../data/videogames");

// index
router.get('/', (req, res) => {
    res.json({
        data: gamesList,
        count: gamesList.length
    });
});

// show
router.get('/:id', (req, res) => {
    const gameId = req.params.id;
    res.json('leggiamo solo un determinato dato' + gameId);
});

// create
router.post('/', (req, res) => {
    res.json('creiamo un nuovo elemento');
});

// update
router.put('/:id', (req, res) => {
    const gameId = req.params.id;
    res.json('modifichiamo i dati di uno specifico elemento' + gameId);
});

// modify
router.patch('/:id', (req, res) => {
    const gameId = req.params.id;
    res.json('modifichiamo gli specifici dati uno specifico elemento' + gameId);
});

// destroy
router.delete('/:id', (req, res) => {
    const gameId = req.params.id;
    res.json('eliminiamo un elemento' + gameId);
});

module.exports = router;