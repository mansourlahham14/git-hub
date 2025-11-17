function calcola() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let somma = n1 + n2;
	document.getElementById("risultato").textContent = "Risultato: " + somma;
}
function calcola1() {
  let n3 = Number(document.getElementById("n3").value);
  let n4 = Number(document.getElementById("n4").value);
  let sottrai = n3 - n4;
	document.getElementById("risultato").textContent = "Risultato: " + sottrai;
}
function calcola2() {
  let n5 = Number(document.getElementById("n5").value);
  let n6 = Number(document.getElementById("n6").value);
  let moltiplica = n5 * n6;
	document.getElementById("risultato").textContent = "Risultato: " + moltiplica;
}
function calcola3() {
  let n7 = Number(document.getElementById("n7").value);
  let n8 = Number(document.getElementById("n8").value);
  let dividi = n7 / n8;
	document.getElementById("risultato").textContent = "Risultato: " + dividi;
}