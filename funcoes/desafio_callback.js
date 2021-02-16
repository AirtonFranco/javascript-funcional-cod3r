const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99},
    {nome: 'Impressora', qtd: 0, preco: 649.50},
    {nome: 'Caderno', qtd: 4, preco: 7.99},
    {nome: 'Lapis', qtd: 3, preco: 5.82},
    {nome: 'Tesoura', qtd: 1, preco: 19.20}
    
]

const getNome = item => item.nome

console.log(carrinho.map(getNome))

const getSoma = valor => valor.qtd * valor.preco

const total = carrinho.map(getSoma)

console.log(total)