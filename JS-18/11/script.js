// <!-- ---ESERCITAZIONE 1--- -->

 const elementi = document.querySelectorAll("li");
 for(const item of elementi){
     console.log(item.textcontent);
 }


// <!-- ---ESERCITAZIONE 2.1--- -->

const inputA = document.querySelectorAll("a");
console.log(inputA);

const paragrafi = document.querySelectorAll("p");
console.log(paragrafi.length);

const elementi1 = document.querySelectorAll("[data-id]");
console.log(elementi1)

const linkInterni = document.querySelectorAll('a[href^="#"]');
console.log(linkInterni)


// <!-- ---ESERCITAZIONE 2.2--- -->

const contenuto = document.getElementById("contenuto");
console.log(contenuto);

const genitore = document.querySelector("contenuto");
console.log("contenuto1:", contenuto.parentElement);

const figli = document.querySelector("contenuto");
console.log("contenuto2:", contenuto.children);

const fratelli = document.querySelector("contenuto");
console.log("contenuto3:", contenuto.nextElementSibling);