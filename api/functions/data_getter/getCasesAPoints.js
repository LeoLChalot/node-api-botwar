/**
 * Extrait toutes les cases qui contiennent un point (normal ou mégapoint).
 * @param {Array<object>} gridDetail Le tableau détaillé de la grille.
 * @returns {Array<object>} Un tableau de cases contenant un point ou un mégapoint.
 */
function getCasesAPoints(detailGrille) {
  const cellules = detailGrille.filter(cellule => {
    return cellule.point == true || cellule.megaPoint == true;
  });
  return cellules;
}

module.exports = getCasesAPoints;