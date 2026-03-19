const inputQTD = document.querySelector('#qtd-nhoque')
const precoTexto = document.querySelector('#preco-nhoque')

if(inputQTD && precoTexto){
    inputQTD.addEventListener("input",() =>{
        const precoUnitario = 38.0
        const total = Number(inputQTD.value) * precoUnitario
        precoTexto.textContent = `R$ ${total.toFixed(2)`
    })
}