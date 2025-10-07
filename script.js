//alert("script Fucionando")

//pegando o select** Selecione o elemento <select>
const select = document.querySelector(".mes");







const busca = document.querySelector(".buscar")
const p1 = document.querySelector(".p1")


busca.addEventListener("click",()=>{
 //pegar o opition**Acesse a option selecionada:
const selectOption = select.options[select.selectedIndex];
const opitionText = select.options[select.selectedIndex].text;  

// Obtenha o value da option

const valorDaOption = selectOption.value;
p1.textContent="Mês:  "+opitionText
 console.log(valorDaOption)   

})


