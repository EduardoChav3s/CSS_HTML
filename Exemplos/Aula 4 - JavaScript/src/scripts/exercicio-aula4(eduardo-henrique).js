// EXERCICIOS - AULA 4

// const nome = prompt("Seja bem-vindo, qual seria seu nome?")

// const sobrenome = prompt("e seu sobrenome?")

// let nomeCompleto = nome.concat("", sobrenome).trim()
// alert(nomeCompleto)

// alert("O total de caracteres do seu nome é de:" + nomeCompleto.length)

// const valorTotal = prompt("Boa noite, qual seria o valor total da mesa?")

// const pessoasTotal = prompt("Tem quantas pessoas na mesa?")

// let conta = valorTotal / pessoasTotal

// alert(`Cada amigo deve pagar R$${conta.toFixed(2)}`)

// alert("Olá")
// const valorCompra = prompt("Qual foi o valor da sua compra?")

// let cupom = confirm("Se você possui cupom clique em - Ok - Senão clique em  - Cancelar -")

// let resposta = valorCompra > 150 || cupom == true

class Veiculo{
    constructor(mo, ma, an){
        this.modelo = mo
        this.marca = ma
        this.ano = an
    }
    idadeVeiculo(anoAtual){
        return anoAtual - this.ano
    }
}

const meuCarro = new Veiculo("Corolla", "Toyota", 2014)
// let anoAtual = prompt("Digite em que anos estamos: ")

alert("O" + meuCarro.modelo + "tem" + meuCarro.idadeVeiculo(anoAtual) + "anos")

let data = new Date()

let anoAtual = data.getFullYear()

alert("O" + meuCarro.modelo + "tem" + meuCarro.idadeVeiculo(anoAtual) + "anos")