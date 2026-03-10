const oefeningen = [
  {
    type: "Sequentie",
    beschrijving: "Schrijf een programma dat een getal inleest.\nDaarna wordt het kwadraat afgedrukt van dit getal.\nDruk ook het kwadraat van de buren van dit getal af.",
    code: "TXT/DotNet/sequentie.txt",
  },
  {
    type: "Selectie",
    beschrijving: "Schrijf een programma dat voor een bepaald coördinaat bepaalt in welk kwadrant dit ligt.\nDe gebruiker geeft een X-coördinaat in.\nDe gebruiker geeft een Y-coördinaat in.\nHet programma bepaalt vervolgens het juiste kwadrant.",
    code: "TXT/DotNet/selectie.txt",
  },
  {
    type: "For Loop",
    beschrijving: "Lees 2 symbolen in.\nVraag daarna een lengte.\nVraag daarna een breedte.\nDruk vervolgens een sjaal af met de ingevoerde symbolen, lengte en breedte.",
    code: "TXT/DotNet/forLoop.txt",
  },
  {
    type: "Do While",
    beschrijving: "Lees voor 3 pijlen de landingsplaats.\nGeef vervolgens het totaal van de punten weer.\nIngevoerde waardes moeten gehele getallen zijn.\nDe waarden moeten groter zijn dan 0 en kleiner of gelijk aan 4.\nNa een correcte invoer wordt een nieuw scherm getoond.\n\nBuiten de roos: 0 punten (landingsplaats 1)\nBinnenste ring: 20 punten (landingsplaats 2)\nBuitenste ring: 50 punten (landingsplaats 3)\nIn het hart: 100 punten (landingsplaats 4)",
    code: "TXT/DotNet/doWhile.txt",
  },
  {
    type: "While Do",
    beschrijving: "Vraag de gebruiker om een tafel in te geven.\nDe gebruiker kan dit blijven doen tot het getal 0 wordt ingegeven.\nWe tonen van elk ingegeven getal de tafel van 10.",
    code: "TXT/DotNet/whileDo.txt",
  },
  {
    type: "Collecties",
    beschrijving: "Schrijf een programma dat de gebruiker vraagt om woorden in te geven.\nDeze woorden steek je in een lijst.\n\nPrint daarna het kortste woord.\nPrint ook het langste woord.\n\nPrint vervolgens de som af van de posities van het kortste en het langste woord in de lijst.",
    code: "TXT/DotNet/collecties.txt",
  },
];

const container = document.getElementById("dotnetOefeningen");

async function laadOefeningen() {
  for (const oefening of oefeningen) {
    const kaart = document.createElement("article");
    kaart.className = "dotnetKaart";

    kaart.innerHTML = `
      <div class="dotnetLayout">
        <div class="dotnetBeschrijving block">
          <p class="label">Oefening | C#</p>
          <div class="dotnetTitel">${oefening.type}</div>
          <p class="dotnetTekst">${oefening.beschrijving}</p>
        </div>

        <div class="dotnetCodeKaart block">
          <div class="dotnetCodeHeader">
            <div class="dotnetDots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <pre class="dotnetCode"><code>Code laden...</code></pre>
        </div>
      </div>
    `;

    container.appendChild(kaart);

    const codeElement = kaart.querySelector("code");

    try {
      const response = await fetch(oefening.code);
      const text = await response.text();
      codeElement.textContent = text;
    } catch {
      codeElement.textContent = "Code kon niet geladen worden.";
    }
  }
}

laadOefeningen();