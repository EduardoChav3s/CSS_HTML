// class Prato{
//     constructor(nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }

//     exibirReais(total){
//         return `R$${total.toFixed(2)}`
//     }

// }

// const macarrao = new Prato("Macarrão ao molho sugo", 45.00)

// alert("Seja bem-vindo ao Restaurante Sabor e saber")

// console.log("Teste")

// const cliente = prompt("Digite seu nome:")

// let nomeFormatado = cliente.trim().toUpperCase()

// alert(`Bem-vindo: ${nomeFormatado}`)


// const horaAgora = new Date()

// const hora = horaAgora.getHours()

// if(hora < 11){
//     alert(`Bom dia ${nomeFormatado}`)
// }else{
//     alert(`Boa tarde ${nomeFormatado}`)
//     console.log("Depois das onze")
// }


// const querPrato = confirm(`Oi amigo ${nomeFormatado}, quer uma comidinha?`)

// if(querPrato){
//     let quantidade = prompt("Tem macarrão hoje, vai querer quantas?")
//     let total = macarrao.preco * quantidade
//     //alert(total)
//     alert(`Joia, seu total de ${macarrao.nome} é de: ${macarrao.exibirReais(total)}`)
// }else{
//     alert("Valeu pela atenção colega")
// }