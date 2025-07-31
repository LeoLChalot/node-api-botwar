const { el } = require("date-fns/locale");

function distanceManhattan(coordonneesA, coordonneesB) {
  console.log('distanceManhattan');
  console.log((coordonneesB.x - coordonneesA.x) + (coordonneesB.y - coordonneesA.y));
  return Math.abs(coordonneesB.x - coordonneesA.x) + Math.abs(coordonneesB.y - coordonneesA.y);
}

function collectionDesDistancesManhattan(caseBot, casesAPoints, listeExclusion) {
  console.log('collectionDesDistancesManhattan');
  let distances = [];

  for (let i = 0; i < casesAPoints.length; i++) {

    console.log(casesAPoints[i]);
    const distanceInfo = {
      coordonnees: { x: casesAPoints[i].x, y: casesAPoints[i].y },
      type: casesAPoints[i].megaPoint > 0 ? "megaPoint" : "point",
      distance: distanceManhattan(caseBot[0], casesAPoints[i])
    };
    distances.push(distanceInfo);
  }

  return distances.sort((a, b) => a.distance - b.distance);
}


function mouvement(caseBot, casesAPoints, casesABombes) {
  let collection = collectionDesDistancesManhattan(caseBot, casesAPoints);

  const storedData = localStorage.getItem('ex');
  if (storedData) {
    // Je parse le JSON si des données existent
    excludedCoordinates = JSON.parse(storedData);
  }

  const elementX = collection[0].coordonnees.x;
  const elementY = collection[0].coordonnees.y;
  const botX = caseBot[0].x;
  const botY = caseBot[0].y;
  const mouvement = [botX - elementX, botY - elementY];

  console.table(mouvement);

  const move_options = {
    up: "up",
    left: "left",
    bottom: "bottom",
    right: "right",
    stay: "stay"
  };
  const action_options = {
    collect: "collect",
    attack: "attack",
    bomb: "bombe",
    none: "none"
  };

  console.table(collection);
  console.table(move_options);
  console.table(action_options);

  if (mouvement[0] > 0) {
    console.log({ "move": "RIGHT", "action": "NONE" })
    return { "move": "RIGHT", "action": "NONE" };}
  if (mouvement[0] < 0) {
    console.log({ "move": "LEFT", "action": "NONE" })
    return { "move": "LEFT", "action": "NONE" }
  }
  if (mouvement[1] > 0) {
    console.log({ "move": "UP", "action": "NONE" })
    return { "move": "UP", "action": "NONE" };
  }
  if (mouvement[1] < 0) {
    console.log({ "move": "DOWN", "action": "NONE" })
    return { "move": "DOWN", "action": "NONE" };
  }
  console.log({ "move": "STAY", "action": "COLLECT" })
  localStorage.
  listeExclusion.push({ x: elementX, y: elementY })
  return { "move": "STAY", "action": "COLLECT" };
}

module.exports = mouvement;