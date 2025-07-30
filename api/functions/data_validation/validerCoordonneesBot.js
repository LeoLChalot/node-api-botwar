const throwError = require('../utils/throwError');

const FILENAME = require('path').basename(__filename);

function validerCoordonneesBot(statut) {
  const bot = statut["you"];
  const botX = bot.x;
  const botY = bot.y;

  if (typeof botX != "number" || typeof botY != "number") {
    throwError(FILENAME, `Le type des coordonnées du bot n'est pas correct`);
  }

  if (botX < 0 || botY < 0) {
    throwError(FILENAME, `La position du bot n'est pas correcte`);
  }

  console.log("COORDONNEES DU BOT VALIDE")
  return true;
}

module.exports = validerCoordonneesBot;