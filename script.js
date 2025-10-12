import { mes } from "./meses.js";
import { mesimg } from "./img.js";

//pegando o select** Selecione o elemento <select>
const select = document.querySelector(".mes");


const busca = document.querySelector(".buscar")
const p1 = document.querySelector(".p1")
const iputImag = document.querySelector(".iputImag")
const img = document.querySelector(".img")
const pai = document.querySelector(".pai")

var posiput = 0
var cont2 = 0
busca.addEventListener("click",()=>{
 
 //pegar o opition**Acesse a option selecionada:
const selectOption = select.options[select.selectedIndex];
const opitionText = select.options[select.selectedIndex].text;  

// Obtenha o value da option

const valorDaOption = selectOption.value;
iputImag.style.display="block"
posiput = valorDaOption
var busqmes = mes[valorDaOption]
p1.textContent="Mês:  "+opitionText

   

  busqmes.map(() =>{

    
 var p2 = document.createElement("p")
 p2.textContent=busqmes[cont2]

 pai.appendChild(p2)
 cont2++
 })
    


});

var cont = 0;

iputImag.addEventListener("click", ()=>{
    
    var posImg = mesimg[posiput]
    img.src= posImg[cont]

    cont++ 
    if (cont==posImg.length) {
      cont=0  
    }

})

