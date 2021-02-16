const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99},
    {nome: 'Impressora', qtd: 0, preco: 649.50},
    {nome: 'Caderno', qtd: 4, preco: 27.10},
    {nome: 'Lapis', qtd: 3, preco: 5.82},
    {nome: 'Tesoura', qtd: 1, preco: 19.20}
    
]

const valores = item => item.qtd * item.preco

const somarTudo = (acc, el) => acc + el //essa fn irá somar tudo

const total = carrinho
.map(valores)
.reduce(somarTudo, 0) //O 0 será a soma inicial
console.log(total)