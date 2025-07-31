// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const headers = require('./middleware/headers');

const validerStatut = require('./functions/data_validation/validerStatut');
const getStatut = require('./functions/data_getter/getStatut');
const getGrille = require('./functions/data_getter/getGrille');
const getCoordonneesBot = require('./functions/data_getter/getCoordonneesBot');
const getCasesAdjacentes = require('./functions/data_getter/getCasesAdjacentes');

const port = process.env.PORT || 3000;
const FILENAME = require('path').basename(__filename);

// Configuration CORS
const corsOptions = {
    origin: 'https://bot.gogokodo.com',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTION'],
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Pour parser les données du heaser x-game-state
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome bot trainer" });
});

/*  
*   # Reçoit l'état de la partie
*
*   @param {object} state - L'état de la partie
*   @return {JSON} action - L'action à effectuer
*/
app.get('/action', headers, (req, res) => {
    let statut;
    let statutIsValid
    try {
        statut = getStatut(req.headers['x-game-state']);
        statutIsValid = validerStatut(statut);
    }
    catch (e) {
        throw (e.message);
    }

    const coordoneesBot = getCoordonneesBot(statut);
    const grille = getGrille(statut);
    const coordoneesCasesAdjacentes = getCasesAdjacentes(grille, coordoneesBot);

    const informations = {
        "coordonnées du bot": coordoneesBot,
        "Dimensions de la grille": grille,
        "Cases adjacentes": coordoneesCasesAdjacentes
    };

    console.log(informations);

    const response = { "move": "UP", "action": "COLLECT" };
    res.status(200).json(response);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// Exporter app pour répondre aux éxigeances de Vercel
// https://vercel.com/guides/using-express-with-vercel#4.-initialize-an-express.js-server
module.exports = app;

// Pour la configuration de vercel.json, utiliser rewrite{[]}
// { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }