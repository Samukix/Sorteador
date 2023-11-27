const botaoSortear = document.querySelector("div.box button")
var numeroSorteado = document.querySelector("div.box g1")


var roleta = []

for(i = 1;i <= 100; i++){
    roleta.push(i)
}


botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = "Número Sorteado: " + roleta[Math.floor(Math.random() * roleta.length)]
})