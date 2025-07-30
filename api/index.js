// require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const headers = require('./middleware/headers');

const getStatut = require('./functions/getStatut')

const port = process.env.PORT || 3000;

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
})

/*  
*   # Reçoit l'état de la partie
*
*   @param {object} state - L'état de la partie
*   @return {JSON} action - L'action à effectuer
*/
app.get('/action', headers, (req, res) => {

    try {
        const statut = getStatut(req.headers['x-game-state'])
    }
    catch (e){
        throw(e);
    }
 
    const tailleGrille = 5;
    const mouvements = [
        { x: 0, y: -1 },
        { x: 0, y: 1 },
        { x: -1, y: 0 },
        { x: 1, y: 0 }
    ];
    const casesAdjacentes = [];
    if (statut) {

        // On récupère les coordonnées actuelles du bot
        const botCoordonnes = { x: statut['you']['x'], y: statut['you']['y'] }

        /*
        * Ensemble de la logique de reflexion du bot
        * On vérifie à la réception de l'état de la partie si :
        * - la case de coordonnées (x, y+1)
        * - la case de coordonnées (x, y-1)
        * - la case de coordonnées (x+1, y)
        * - la case de coordonnées (x-1, y)
        */
        for (const mouvement of mouvements) {
            const x = botCoordonnes.x + mouvement.x;
            const y = botCoordonnes.y + mouvement.y;

            // Vérifier si la nouvelle position est possible (intérieur  de la grille)
            if (x >= 0 && x < tailleGrille && y >= 0 && y < tailleGrille) {
                casesAdjacentes.push({ x: x, y: y });
            }
        }

        // Vérifier le contenu des cases adjacentes

        console.log("Cases adjacentes :", casesAdjacentes);
    }


    // Cases disponibles
    // const botCoordonnees = json(state)

    /*
    * Chaque case peut contenir :
    * - Une entité "bot"
    * - Une entité "point"
    * - Une entité "bomb" 
    */


    const response = { "move": "UP", "action": "COLLECT" };
    res.status(200).json(response);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

// Exporter app pour répondre aux éxigeances de Vercel
// https://vercel.com/guides/using-express-with-vercel#4.-initialize-an-express.js-server
module.exports = app;

// Pour la configuration de vercel.json, utiliser rewrite{[]}
// { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }