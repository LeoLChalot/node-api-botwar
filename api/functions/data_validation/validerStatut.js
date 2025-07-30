const throwError = require('../utils/throwError');
const estDansLeTableau = require('../utils/estDansLeTableau');
const validerGrille = require('./validerGrille');
const validerCoordonneesBot = require('./validerCoordonneesBot');

const FILENAME = require('path').basename(__filename);
const ATTRIBUTS = ["you", "grid", "otherBots", "points", "megaPoint", "gameTime", "turnNumber"];

function validerStatut(initialStatut) {
  if (!initialStatut) {
    throwError(FILENAME, 'Le statut n\'est récupéré');
  }
  const attributsStatut = Object.keys(initialStatut);

  if (!estDansLeTableau(attributsStatut, ATTRIBUTS)) {
    const attributManquants = ATTRIBUTS.filter(attr => !attributsStatut.includes(attr));

    throwError(FILENAME, `Des attributs sont manquants dans le statut : ${attributManquants.join(", ")}.`);
  }

  if (!validerGrille(initialStatut)) {
    throwError(FILENAME, 'La grille n\'a pas les prérequis nécessaires');
  }

  if (!validerCoordonneesBot(initialStatut)) {
    throwError(FILENAME, 'Les coordonnées du bot semblent être corrompues');
  }

  console.log("STATUT VALIDE")
  return true;
}

module.exports = validerStatut;