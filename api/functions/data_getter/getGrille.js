function getGrille(statut) {
  const grid = statut["grid"];
  const grilleY = grid.length;
  const grilleX = grid[0].length;

  return { grilleX: grilleX, grilleY: grilleY };
}

module.exports = getGrille;