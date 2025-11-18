let utenti = [];

function creaUtente(nome, eta, professione = "non specificata") {

  let categoria;

  switch (professione.toLowerCase()) {
    case "studente":
      categoria = "studente";
      break;
    case "developer":
    case "programmatore":
    case "sviluppatore":
      categoria = "developer";
      break;
    case "designer":
    case "grafico":
      categoria = "designer";
      break;
    default:
      categoria = "altro";
  }

  return {
    nome: nome,
    eta: eta,
    professione: professione,
    categoria: categoria,
  };
}

const generaMessaggio = (utente) => {
  return `${utente.nome} ha ${utente.eta} anni ed è classificato come ${utente.categoria}`;
};

function mostraUtenti() {
  console.log(" Aggiornamento lista utenti...");

  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  if (!utenti.length) {
    lista.innerHTML = '<div class="empty-state">Nessun utente presente. Aggiungi il primo utente!</div>';
    return;
  }

  for (const utente of utenti) {
    const messaggio = generaMessaggio(utente);

    const userHTML = `
            <div class="user-card">
                <h3> ${utente.nome}</h3>
                <p><strong>Età:</strong> ${utente.eta} anni</p>
                <p><strong>Professione:</strong> ${utente.professione}</p>
                <p><strong>Messaggio:</strong> ${messaggio}</p>
                <span class="categoria ${utente.categoria}">${utente.categoria.toUpperCase()}</span>
            </div>
        `;

    lista.innerHTML += userHTML;
  }
}

function debugUtenti() {

  console.table(utenti);

  for (const index in utenti) {
    console.log(`--- Utente #${parseInt(index) + 1} ---`);
    const utente = utenti[index];

    for (const proprieta in utente) {
      console.log(`${proprieta}: ${utente[proprieta]}`);
    }
  }

  console.log(" DEBUG completato!");
}

function aggiungiUtente() {
  console.log(" Tentativo di aggiungere un nuovo utente...");

  const inputNome = document.getElementById("nome");
  const inputEta = document.getElementById("eta");
  const inputProfessione = document.getElementById("professione");

  const nome = inputNome.value.trim();
  const eta = parseInt(inputEta.value);
  const professione = inputProfessione.value.trim();


  if (!nome) {
    console.error(" ERRORE: Nome mancante!");
    alert("Per favore, inserisci il nome!");
    return;
  }

  if (!eta || eta <= 0 || isNaN(eta)) {
    console.warn(" ATTENZIONE: Età non valida");
    alert("Per favore, inserisci un'età valida!");
    return;
  }

  console.log(" Validazione superata!");

  let messaggio = "Utente aggiunto!";
  console.log(` ${messaggio}`); 

  const nuovoUtente = creaUtente(nome, eta, professione);

  utenti.push(nuovoUtente);

  console.log(" Utente aggiunto con successo:", nuovoUtente);

  mostraUtenti();

  debugUtenti();

  inputNome.value = "";
  inputEta.value = "";
  inputProfessione.value = "";

  alert(`${messaggio}\n${generaMessaggio(nuovoUtente)}`);
}

const filtraMaggiorenni = () => {
  console.log(" Filtro maggiorenni attivato...");

  const maggiorenni = utenti.filter((utente) => utente.eta >= 18);

  if (maggiorenni.length === 0) {
    console.warn(" Nessun maggiorenne trovato!");
    alert("Non ci sono utenti maggiorenni nella lista.");
    return;
  }

  console.log(` Trovati ${maggiorenni.length} maggiorenni`);
  console.table(maggiorenni);

  mostraFiltro(maggiorenni);
};

function mostraFiltro(listaFiltrata) {
  console.log(" Visualizzazione lista filtrata...");

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  lista.innerHTML = '<h3 style="color: #a94444ff; margin-bottom: 15px;"> Solo Maggiorenni</h3>';

  for (const utente of listaFiltrata) {
    const messaggio = generaMessaggio(utente);

    const userHTML = `
            <div class="user-card">
                <h3> ${utente.nome}</h3>
                <p><strong>Età:</strong> ${utente.eta} anni</p>
                <p><strong>Professione:</strong> ${utente.professione}</p>
                <p><strong>Messaggio:</strong> ${messaggio}</p>
                <span class="categoria ${utente.categoria}">${utente.categoria.toUpperCase()}</span>
            </div>
        `;

    lista.innerHTML += userHTML;
  }

  lista.innerHTML += `
        <button onclick="mostraUtenti()" style="margin-top: 15px; background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer;">
            ⬅ Mostra tutti gli utenti
        </button>
    `;
}


document.getElementById("btnAggiungi").addEventListener("click", aggiungiUtente);

document.getElementById("btnFiltra").addEventListener("click", filtraMaggiorenni);

document.getElementById("professione").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    aggiungiUtente();
  }
});


console.log(" App inizializzata correttamente!");
console.log(" Stato iniziale array utenti:", utenti);

mostraUtenti();