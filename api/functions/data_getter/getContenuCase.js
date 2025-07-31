const throwError = require('../utils/throwError');

function getContenuCase(cellule, statut) {
  const x = cellule.x;
  const y = cellule.y;
  const bot = cellule.bots.length > 0 ? 1 : 0;
  const point = cellule.points.length > 0 ? 1 : 0;
  const bomb = cellule.bombs.length > 0 ? 1 : 0;
  const positionActuelle = (x == statut["you"].x && y == statut["you"].y) ? 1 : 0;
  const megaPoint = (x == statut["megaPoint"].x && y == statut["megaPoint"].y) ? 1 : 0;

  const detailCellule = {
    x: x,
    y: y,
    bot: bot,
    point: point,
    bomb: bomb,
    positionBot: positionActuelle,
    megaPoint: megaPoint
  };

  return detailCellule;
}

module.exports = getContenuCase;