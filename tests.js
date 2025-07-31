const statut = {
  "you": {
    "id": "test-bot",
    "x": 2,
    "y": 2,
    "score": 0,
    "bombs": 3,
    "isAlive": true
  },
  "grid": [
    [
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [{ "id": "point" }], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] }
    ],
    [
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [{ "id": "point" }], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [{ "id": "bomb" }] }
    ],
    [
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] }
    ],
    [
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [{ "id": "point" }], "bombs": [] }
    ],
    [
      { "bots": [], "points": [], "bombs": [{ "id": "bomb" }] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] },
      { "bots": [], "points": [], "bombs": [] }
    ]
  ],
  "otherBots": [],
  "points": [
    { "x": 1, "y": 1 },
    { "x": 3, "y": 0 },
    { "x": 4, "y": 3 }
  ],
  "megaPoint": { "x": 2, "y": 0 },
  "gameTime": 10,
  "turnNumber": 1
};

function getContenuCase(cellule, statut) {
  // Je prépare mon objet pour cette case, en incluant les coordonnées
  const detailCellule = {
    x: cellule.x,
    y: cellule.y,
    bot: cellule.bots.length > 0,
    point: cellule.points.length > 0,
    bomb: cellule.bombs.length > 0,
    positionBot: (cellule.x === statut["you"]["x"] && cellule.y === statut["you"]["y"]),
    megaPoint: (cellule.x === statut["megaPoint"]["x"] && cellule.y === statut["megaPoint"]["y"]),
  };
  return detailCellule;
}

function parcourirGrille(statut) {
  let detailCellules = [];
  for (let y = 0; y < statut["grid"].length; y++) {
    for (let x = 0; x < statut["grid"][y].length; x++) {
      const celluleCourante = statut["grid"][y][x];
      let detailCellule = getContenuCase(celluleCourante, statut);
      detailCellule["x"] = x;
      detailCellule["y"] = y
      detailCellules.push(detailCellule);
    }
  }
  return detailCellules;
}



console.log(parcourirGrille(statut));