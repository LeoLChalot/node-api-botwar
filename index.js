const express = require('express');
const cors = require('cors')
const app = express();

const port = process.env.PORT || 3000;



app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Welcome bot trainer" }).status(200);
})

/*  
*   # Reçoit l'état de la partie
*
*   @param {object} state - L'état de la partie
*   @return {JSON} action - L'action à effectuer
*/
app.get('/action', (req, res) => {
    console.log('/action')
    const state = req.headers['x-game-state'];
    console.log(state ? state : 'aucun état reçu');
    const response = { "move": "UP", "action": "COLLECT" };
    res.status(200).json(response);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});