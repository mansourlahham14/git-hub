// <!-- ---ESERCITAZIONE 1--- -->

 const elementi = document.querySelectorAll("li");
 for(const item of elementi){
     console.log(item.textcontent);
 }


// <!-- ---ESERCITAZIONE 2--- -->

let inputA = document.querySelectorAll("a");
console.log(inputA);

const paragrafi = document.querySelectorAll("p");
console.log(paragrafi.length);

const elementi1 = document.querySelectorAll("[data-id]");
console.log(elementi1)

const linkInterni = document.querySelectorAll('a[href^="#"]');
console.log(linkInterni)