const validerStatut = require('../functions/data_validation/validerStatut');
const validerGrille = require('../functions/data_validation/validerGrille');
const validerCoordonneesBot = require('../functions/data_validation/validerCoordonneesBot');

describe('validerStatut', () => {

  test('Si aucun statut n\'est disponible', () => {
    // Error
    const statut = undefined;
    expect(() => { validerStatut(statut); }).toThrow();
  });

  test('Si le statut valide tous les points', () => {
    // true
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
      "otherBots": [],
      "points": [
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "megaPoint": {
        "x": 2,
        "y": 0
      },
      "gameTime": 10,
      "turnNumber": 1
    };
    expect(validerStatut(statut)).toBe(true);
  });

});

describe('validerGrille', () => {
  test('Si aucune grille n\'est trouvée', () => {
    // Error
    const statut = {};
    expect(() => { validerGrille(statut); }).toThrow();
  });

  test('Si les dimensions de la grilles ne conviennent pas', () => {
    // Error
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
      ]
    };
    expect(() => { validerGrille(grid); }).toThrow();
  });

  test('Si le type des coordonnées est incorrect', () => {
    // Error
    const statut = {
      "grid": ["x", "y"]
    };
    expect(() => { validerGrille(statut); }).toThrow();
  });

  test('Si le type des coordonnées et les valeurs sont correctes', () => {
    // true
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
      "otherBots": [],
      "points": [
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "megaPoint": {
        "x": 2,
        "y": 0
      },
      "gameTime": 10,
      "turnNumber": 1
    };
    expect(validerGrille(statut)).toBe(true);
  });
});

describe('validerCoordonneesBot', () => {
  test('Si aucune information sur le bot n\'est trouvée', () => {
    // Error
    const statut = {};
    expect(() => { validerCoordonneesBot(you); }).toThrow();
  });

  test('Si le type des coordonnées du bot ne conviennent pas', () => {
    // false
    const statut_1 = {
      "you": {
        "id": "test-bot",
        "x": "2",
        "y": "2",
        "score": 0,
        "bombs": 3,
        "isAlive": true
      },
    };
    const statut_2 = {
      "you": {
        "id": "test-bot",
        "x": 2,
        "y": "2",
        "score": 0,
        "bombs": 3,
        "isAlive": true
      },
    };
    const statut_3 = {
      "you": {
        "id": "test-bot",
        "x": "2",
        "y": 2,
        "score": 0,
        "bombs": 3,
        "isAlive": true
      },
    };
    expect(() => { validerCoordonneesBot(statut_1); }).toThrow();
    expect(() => { validerCoordonneesBot(statut_2); }).toThrow();
    expect(() => { validerCoordonneesBot(statut_3); }).toThrow();
  });

  test('Si les valeurs des coordonnées sont négative (en dehors de la grille', () => {
    // false
    const statut_1 = {
      "you": {
        "id": "test-bot",
        "x": -1,
        "y": -1,
        "score": 0,
        "bombs": 3,
        "isAlive": true
      },
    };
    const statut_2 = {
      "you": {
        "id": "test-bot",
        "x": 1,
        "y": -1,
        "score": 0,
        "bombs": 3,
        "isAlive": true
      },
    };
    const statut_3 = {
      "you": {
        "id": "test-bot",
        "x": -1,
        "y": 1,
        "score": 0,
        "bombs": 3,
        "isAlive": true
      },
    };
    expect(() => { validerGrille(statut_1); }).toThrow();
    expect(() => { validerGrille(statut_2); }).toThrow();
    expect(() => { validerGrille(statut_3); }).toThrow();
  });

  test('Si le type des coordonnées et les valeurs sont correctes', () => {
    // true
    const statut = {
      "you": {
        "id": "test-bot",
        "x": 2,
        "y": 2,
        "score": 0,
        "bombs": 3,
        "isAlive": true
      },
    };
    expect(validerCoordonneesBot(statut)).toBe(true);
  });
});