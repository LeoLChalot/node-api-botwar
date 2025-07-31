const getStatut = require('../functions/data_getter/getStatut');
const getGrille = require('../functions/data_getter/getGrille');
const getCoordonneesBot = require('../functions/data_getter/getCoordonneesBot');
const getCasesAdjacentes = require('../functions/data_getter/getCasesAdjacentes');


describe('getSatut', () => {
  test('Le header X-Game-State est introuvable', () => {
    const header_x_game_state = undefined;
    expect(() => { getStatut(header_x_game_state); }).toThrow();
  });

  test('Le header-x-game-state n\'est pas une chaine de caractères.', () => {
    const header_x_game_state = { "you": { "id": "test-bot", "x": 2, "y": 2, "score": 0, "bombs": 3, "isAlive": true }, "grid": [[{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [{ "id": "bomb" }] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [{ "id": "bomb" }] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }]], "otherBots": [], "points": [{ "x": 1, "y": 1 }, { "x": 3, "y": 0 }, { "x": 4, "y": 3 }], "megaPoint": { "x": 2, "y": 0 }, "gameTime": 10, "turnNumber": 1 };

    expect(() => { getStatut(header_x_game_state); }).toThrow();
  });

  test('Le header-x-game-state est correct.', () => {
    const header_x_game_state = '{ "you": { "id": "test-bot", "x": 2, "y": 2, "score": 0, "bombs": 3, "isAlive": true }, "grid": [[{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [{ "id": "bomb" }] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [{ "id": "bomb" }] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }]], "otherBots": [], "points": [{ "x": 1, "y": 1 }, { "x": 3, "y": 0 }, { "x": 4, "y": 3 }], "megaPoint": { "x": 2, "y": 0 }, "gameTime": 10, "turnNumber": 1 }';

    expect(getStatut(header_x_game_state)).toStrictEqual(
      { "you": { "id": "test-bot", "x": 2, "y": 2, "score": 0, "bombs": 3, "isAlive": true }, "grid": [[{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [{ "id": "bomb" }] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [{ "id": "point" }], "bombs": [] }], [{ "bots": [], "points": [], "bombs": [{ "id": "bomb" }] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }, { "bots": [], "points": [], "bombs": [] }]], "otherBots": [], "points": [{ "x": 1, "y": 1 }, { "x": 3, "y": 0 }, { "x": 4, "y": 3 }], "megaPoint": { "x": 2, "y": 0 }, "gameTime": 10, "turnNumber": 1 }
    );
  });
});

describe('getGrille', () => {
  test('Le format de la grille est correct', () => {
    // true
    const statut = {
      "grid": [
        [
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [
              {
                "id": "point"
              }
            ],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          }
        ],
        [
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [
              {
                "id": "point"
              }
            ],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": [
              {
                "id": "bomb"
              }
            ]
          }
        ],
        [
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          }
        ],
        [
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [
              {
                "id": "point"
              }
            ],
            "bombs": []
          }
        ],
        [
          {
            "bots": [],
            "points": [],
            "bombs": [
              {
                "id": "bomb"
              }
            ]
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          },
          {
            "bots": [],
            "points": [],
            "bombs": []
          }
        ]
      ],
    };
    expect(getGrille(statut)).toStrictEqual({ grilleX: 5, grilleY: 5 });
  });
});

describe('getCoordonneesBot', () => {
  test('Le format de la grille est correct', () => {
    // true
    const statut = {"you": { "id": "test-bot", "x": 2, "y": 2, "score": 0, "bombs": 3, "isAlive": true }};
    expect(getCoordonneesBot(statut)).toStrictEqual({ botX: 2, botY: 2 });
  });
});