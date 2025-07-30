function getCasesAdjacentes(grille, coordoneesBot) {

  const { grilleX, grilleY } = grille;
  const { botX, botY } = coordoneesBot;
  const casesAdjacentes = [];

  const mouvements = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 }
  ];
  
  for (const mouvement of mouvements) {
    const x = botX + mouvement.x;
    const y = botY + mouvement.y;

    if (x >= 0 && x < grilleX && y >= 0 && y < grilleY) {
      casesAdjacentes.push({ x: x, y: y });
    }
  }

  return casesAdjacentes;
}

module.exports = getCasesAdjacentes;