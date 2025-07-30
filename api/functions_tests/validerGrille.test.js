const { throwError } = require('./general')

function initGrille(x, y) {
  if (typeof x != "number" || typeof y != "number") throwError(`Les coordonnées n'ont pas le bon format`)
  if (x < 1 || y < 1) throwError(`La taille de la grille n'est pas valable !`)
    
  return { x: x, y: y };
}

module.exports = initGrille;