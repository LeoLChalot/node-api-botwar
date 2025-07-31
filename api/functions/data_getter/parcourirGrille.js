const getContenuCase = require('./getContenuCase')

function parcourirGrille(statut) {
  let detailCellules = [];
  for (let y = 0; y < statut["grid"].length; y++) {
    for (let x = 0; x < statut["grid"][y].length; x++) {
      let celluleCourante = statut["grid"][y][x];
      celluleCourante["x"] = x
      celluleCourante["y"] = y
      let detailCellule = getContenuCase(celluleCourante, statut);
      detailCellules.push(detailCellule);
    }
  }
  return detailCellules;
}

module.exports = parcourirGrille;