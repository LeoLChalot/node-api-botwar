/**
 * @brief Vérifie si tous les éléments d'un tableau sont présents dans un autre tableau.
 * @param {Array<string>} sourceArray Le tableau source dans lequel la recherche est effectuée (par exemple, les clés d'un objet).
 * @param {Array<string>} searchElements Les éléments que l'on s'attend à trouver dans le tableau source.
 * @returns {boolean} Retourne `true` si tous les `searchElements` sont trouvés dans `sourceArray`, sinon `false`.
 */
function estDansLeTableau(tableauACompare, tableauConst) {
  return tableauConst.every(attribute => tableauACompare.includes(attribute));
}

module.exports = estDansLeTableau;