function estDansLeTableau(tableauACompare, tableauConst) {
    return tableauConst.every(attribute => tableauACompare.includes(attribute));
}

function getStatut(xGameStateHeader) {

    if (!xGameStateHeader) throw new Error("Le header X-Game-State est introuvable");
    if (typeof xGameStateHeader !== "string") throw new Error("Le type de X-Game-State n'est pas correct");

    let statut;

    try {
        statut = JSON.parse(xGameStateHeader);
    } catch (error) {
        throw new Error(`Erreur lors du parsing deX-Game-State : ${error.message}.`);
    }

    const attributsRecuperes = Object.keys(statut);
    const attributsRecherches = ["you", "grid", "otherBots", "points", "megaPoint", "gameTime", "turnNumber"];

    if (!containsAllAttributes(attributsRecuperes, attributsRecherches)) {
        const attributManquants = requiredAttributes.filter(attr => !actualAttributes.includes(attr));
        throw new Error(`Des attributs sont manquants dans le statut : ${attributManquants.join(", ")}.`);
    }

    return statut;
}

module.exports = {getStatut};