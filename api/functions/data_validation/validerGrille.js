const throwError = require('../utils/throwError');

const FILENAME = require('path').basename(__filename)

function validerGrille(statut) {
  const grid = statut["grid"];

  const grilleY = grid.length;
  const grilleX = grid[0].length;

  if (typeof grilleX != "number" || typeof grilleY != "number") {
    throwError(FILENAME, `Le type des dimensions de la grille n'est pas correct`);
  }
  if (grilleX < 2 || grilleY < 2) {
    throwError(FILENAME, `Les dimensions de la grille sont trop petites (< 2) !`);
  }
  console.log("GRILLE VALIDE")
  return true;
}

module.exports = validerGrille;