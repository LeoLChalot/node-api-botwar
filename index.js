const express = require('express');
const cors = require('cors')
const app = express();

const port = 3000;

app.use(cors())

app.get('/', (req, res, next) => {
    res.send('Hello World!');
});


/*  
*   # Reçoit l'état de la partie
*
*   @param {object} state - L'état de la partie
*   @return {JSON} action - L'action à effectuer
*/
app.post('/action', (req, res) => {
    const state = req.body.state;
    console.log('/action')
    console.log(state ? state : 'aucun état reçu');
    const response = {"move": "UP", "action": "COLLECT"};
    res.json(response).status(200);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});