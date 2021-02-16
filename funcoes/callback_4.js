const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99},
    {nome: 'Impressora', qtd: 0, preco: 649.50},
    {nome: 'Caderno', qtd: 4, preco: 7.99},
    {nome: 'Lapis', qtd: 3, preco: 5.82},
    {nome: 'Tesoura', qtd: 1, preco: 19.20}
    
]

const getNome = item => item.nome

const qtdMaior = item => item.qtd >= 2

const valor = carrinho
.filter(qtdMaior)
.map(getNome)

console.log(valor)