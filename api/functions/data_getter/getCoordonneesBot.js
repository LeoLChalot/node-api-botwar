function getCoordonneesBot(statut) {
  const bot = statut["you"];
  const botX = bot.x;
  const botY = bot.y;

  return { botX: botX, botY: botY };
}

module.exports = getCoordonneesBot;