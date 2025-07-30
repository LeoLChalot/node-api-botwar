const getHorodatage = require('./getHorodatage');
/**
 * @brief Génère un message d'erreur horodaté.
 * @returns {Error} Le message d'erreur formatté.
 */
function throwError(filename, message) {
  throw new Error(`${filename} - ${getHorodatage()} - ${message}`);
}


module.exports = throwError; 