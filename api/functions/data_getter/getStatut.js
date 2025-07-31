const throwError = require('../utils/throwError');

const FILENAME = require('path').basename(__filename);

/**
 * @brief Analyse et valide le contenu du header X-Game-State.
 * @description Cette fonction prend une chaîne JSON du header X-Game-State, la parse,
 * et vérifie qu'elle contient tous les attributs nécessaires à la suite du programme.
 * @param {string} xGameStateHeader La chaîne de caractères JSON représentant le header X-Game-State.
 * @returns {object} L'objet JavaScript parsé si la validation est réussie.
 * @throws {Error} Lance une erreur si le header est manquant/vide, de type incorrect,
 * si le parsing JSON échoue, ou si des attributs essentiels sont manquants.
 */
function getStatut(xGameStateHeader) {
    if (!xGameStateHeader) {
        throwError(FILENAME, `Le header X-Game-State est introuvable`);
    }
    if (typeof xGameStateHeader !== "string") {
        throwError(FILENAME, `Le type de X-Game-State n'est pas correct`);
    }
    let statut;
    try {
        statut = JSON.parse(xGameStateHeader);
        if (typeof statut != "object") {
            throwError(FILENAME, 'Le type du statut de la partie est incorrect.');
        }
    } catch (error) {
        throwError(FILENAME, `Erreur lors du parsing deX-Game-State : ${error.message}.`);
    }

    return statut;
}

module.exports = getStatut;