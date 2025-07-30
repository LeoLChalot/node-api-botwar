const { throwError, estDansLeTableau } = require('./general');

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

    if (!xGameStateHeader) throwError(`Le header X-Game-State est introuvable`);
    if (typeof xGameStateHeader !== "string") throwError(`Le type de X-Game-State n'est pas correct`);

    let statut;
    try {
        statut = JSON.parse(xGameStateHeader);
    } catch (error) {
        throwError(`Erreur lors du parsing deX-Game-State : ${error.message}.`);
    }

    const attributsRecuperes = Object.keys(statut);
    const attributsRecherches = ["you", "grid", "otherBots", "points", "megaPoint", "gameTime", "turnNumber"];

    if (!estDansLeTableau(attributsRecuperes, attributsRecherches)) {
        const attributManquants = requiredAttributes.filter(attr => !actualAttributes.includes(attr));
        throwError(`Des attributs sont manquants dans le statut : ${attributManquants.join(", ")}.`);
    }

    return statut;
}

module.exports = getStatut;