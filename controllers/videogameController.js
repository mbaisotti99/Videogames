const gamesList = require("../data/videogames");

const index = (req, res) => {
    res.json({
        data: gamesList,
        count: gamesList.length
    });
}

const show = (req, res) => {
    let game = null;
    for (let i = 0; i < gamesList.length; i++) {
        const curElem = gamesList[i];
        if (curElem.id === parseInt(req.params.id)) {
            game = curElem;
        }
    }
    if (game === null) {
        res.sendStatus(404);
    } else {
        res.json(game);
    }
}

const create = (req, res) => {
    res.json('creiamo un nuovo elemento');
}

const update = (req, res) => {
    const gameId = req.params.id;
    res.json('modifichiamo i dati di uno specifico elemento' + gameId);
}

const modify = (req, res) => {
    const gameId = req.params.id;
    res.json('modifichiamo gli specifici dati uno specifico elemento' + gameId);
}

const destroy = (req, res) => {
    const gameId = req.params.id;
    res.json('eliminiamo un elemento' + gameId);
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}
