const format = require('date-fns')

/**
 * @brief Génère un horodatage formaté.
 * @returns {string} L'horodatage courant au format 'AAAA/MM/JJ - HH:MM'.
 */
function getHorodatage() {
  return format(new Date(), 'yyyy/MM/dd - HH:mm');
}

module.exports = getHorodatage;