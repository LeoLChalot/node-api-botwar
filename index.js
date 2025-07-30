const express = require('express');
const cors = require('cors')
const app = express();

const port = 3000;



// const whitelist = ['https://bot.gogokodo.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(cors());

app.get('/', (req, res) => {
    res.json({message: "Welcome bot trainer"}).status(200);
})

/*  
*   # Reçoit l'état de la partie
*
*   @param {object} state - L'état de la partie
*   @return {JSON} action - L'action à effectuer
*/
app.get('/action', (req, res) => {
    console.log('/action')
    const state = req.headers['X-Game-State'];
    console.log(state ? state : 'aucun état reçu');
    const response = { "move": "UP", "action": "COLLECT" };
    res.header('Access-Control-Allow-Origin', 'https://bot.gogokodo.com').json(response).status(200);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});