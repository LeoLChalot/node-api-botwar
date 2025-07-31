/**
 * Extrait toutes les cases qui contiennent un point (normal ou mégapoint).
 * @param {Array<object>} gridDetail Le tableau détaillé de la grille.
 * @returns {Array<object>} Un tableau de cases contenant un point ou un mégapoint.
 */
function getCaseBot(detailGrille) {
  const cellules = detailGrille.filter(cellule => {
    return cellule.positionBot == true;
  });
  return cellules;
}

module.exports = getCaseBot;