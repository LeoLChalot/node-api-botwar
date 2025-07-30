const { throwError } = require('./general.tests');

function validerLaGrille(statut){
  if (!statut || typeof statut !== 'object') {
    throwError(`Le statut fourni est invalide ou manquant.`);
  }

  const { grid, you: bot } = statut;

  if (
    !grid ||
    !bot ||
    !Array.isArray(grid) ||
    grid.length === 0 ||
    typeof bot !== 'object'
  ) {
    throwError(`La structure de l'objet statut est incorrecte (grille ou bot manquant/invalide).`);
  }

  const grilleY = grid.length;
  const grilleX = grid[0] ? grid[0].length : 0;

  const botX = bot.x;
  const botY = bot.y;

  if (
    typeof grilleX !== "number" ||
    typeof grilleY !== "number" ||
    grilleX <= 0 ||
    grilleY <= 0
  ) {
    throwError(`Les dimensions de la grille sont incorrectes ou trop petites (${grilleX}x${grilleY}).`);
  }

  if (
    typeof botX !== "number" ||
    typeof botY !== "number"
  ) {
    throwError(`Le type des coordonnées du bot n'est pas correct (x: ${typeof botX}, y: ${typeof botY}).`);
  }

  if (botX < 0 ||
    botX >= grilleX ||
    botY < 0 ||
    botY >= grilleY
  ) {
    throwError(`La position du bot (${botX}, ${botY}) est hors des limites de la grille (${grilleX}x${grilleY}).`);
  }

  return {coordonneesBot: {}}
}

function getCasesAdjacentes(statut) {

  const mouvements = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 }
  ];
  const casesAdjacentes = [];

  for (const mouvement of mouvements) {
    const futurX = botX + mouvement.x;
    const futurY = botY + mouvement.y;

    if (
      futurX >= 0 &&
      futurX < grilleX &&
      futurY >= 0 &&
      futurY < grilleY
    ) {
      casesAdjacentes.push({ x: futurX, y: futurY });
    }
  }
  return casesAdjacentes;
}

module.exports = getCasesAdjacentes;