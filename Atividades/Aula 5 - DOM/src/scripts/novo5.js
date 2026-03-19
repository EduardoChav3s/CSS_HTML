const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('.btn-pedido')

const terceiroCard = document.querySelector('.card:nth-child(3 )')

console.log("1. Mostrano o titulo nhoque pelo id", tituloNhoque)

const imagem_nhoque = document.querySelector('#foto-destaque')

const card_nhoque = document.querySelector('card-nhoque')

console.log("2. Quantidade de botões de pedido:", botoesCompra.length)

console.log("3. A quarta (será) posição da class .card", terceiroCard)

const data = new Date()
const hora = data.getHours

const saudacao = document.querySelector('#boas-vindas')

saudacao.textContent = hora < 18 ? "Bem-vindo, boa tarde!" : "Bem-vindo, boa noite!"

const nomeCard = document.querySelector('.card h3')

nomeCard.style.color = '#ffffff'

seuNome.innerHTML = "Meu nome é celso"