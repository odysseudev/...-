const CONFIG = {
  // Coloque aqui o link do seu servidor Discord
  discordInvite: "COLOQUE_AQUI_O_LINK_DO_DISCORD",

  // Coloque aqui o link da sua comunidade/grupo Roblox
  robloxCommunity: "COLOQUE_AQUI_O_LINK_DA_COMUNIDADE_ROBLOX",

  // Coloque aqui o link do canal/regras do Discord, pode ser o mesmo convite
  rulesLink: "COLOQUE_AQUI_O_LINK_DAS_REGRAS",

  // Configure as informações do sorteio
  prizeAmount: "1.000",
  drawDate: "Em breve"
};

const discordBtn = document.getElementById("discordBtn");
const robloxBtn = document.getElementById("robloxBtn");
const rulesBtn = document.getElementById("rulesBtn");

const prizeAmount = document.getElementById("prizeAmount");
const drawDate = document.getElementById("drawDate");
const year = document.getElementById("year");

prizeAmount.textContent = CONFIG.prizeAmount;
drawDate.textContent = CONFIG.drawDate;
year.textContent = new Date().getFullYear();

function openSafeLink(link, name) {
  if (!link || link.includes("COLOQUE_AQUI")) {
    alert(`Configure o link de ${name} no arquivo script.js`);
    return;
  }

  window.open(link, "_blank", "noopener,noreferrer");
}

discordBtn.addEventListener("click", () => {
  openSafeLink(CONFIG.discordInvite, "Discord");
});

robloxBtn.addEventListener("click", () => {
  openSafeLink(CONFIG.robloxCommunity, "Comunidade Roblox");
});

rulesBtn.addEventListener("click", () => {
  openSafeLink(CONFIG.rulesLink, "Regras");
});
