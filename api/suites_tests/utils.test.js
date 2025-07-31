const format = require('date-fns')

const estDansLeTableau = require('../functions/utils/estDansLeTableau'); 

// A tester {estDansLeTableau, getHorodatage, throwError }
 
const regexDate = /^(?:(?!0000)[0-9]{4})\/(?:(?:0[1-9]|1[0-2])\/(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13578]|1[02])\/31|(?:0[1,3-9]|1[0-2])\/(?:29|30)|(?:02)\/(?:29(?:(?!(100|[02468][048]|[13579][26])00)[02468][048]|[13579][26])))\s-\s(?:[01]\d|2[0-3]):[0-5]\d$/;

describe('estDansLeTableau', () => {
  // Tous les éléments nécessaires sont présents
  test('Doit retourner \'true\' quand tous les éléments de tableauConst sont dans tableauACompare', () => {
    const tableauACompare = ['you', 'grid', 'otherBots', 'points', , "megaPoint", "gameTime", "turnNumber"];
    const ATTRIBUTS = ["you", "grid", "otherBots", "points", "megaPoint", "gameTime", "turnNumber"];
    expect(estDansLeTableau(tableauACompare, ATTRIBUTS)).toBe(true);
  });

  // Tous les éléments ne sont pas présents
  test('Doit retourner false quand un ou plusieurs éléments de tableauConst sont absents de tableauACompare', () => {
    const tableauACompare = ['you', 'points', "gameTime", "turnNumber"];
    const ATTRIBUTS = ['you', 'grid', 'otherBots', 'points', , "megaPoint", "gameTime", "turnNumber"];
    expect(estDansLeTableau(tableauACompare, ATTRIBUTS)).toBe(false);
  });

  // Le tableau à comparer vide (si on ne récupère pas le header x-game-statut p-ex)
  test('devrait retourner false quand tableauACompare est vide, quel que soit tableauACompare', () => {
    const tableauACompare = [];
    const ATTRIBUTS = ['you', 'grid', 'otherBots', 'points', , "megaPoint", "gameTime", "turnNumber"];
    expect(estDansLeTableau(tableauACompare, ATTRIBUTS)).toBe(false);
  });

});
