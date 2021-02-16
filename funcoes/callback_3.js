const nums = [1, 2, 3, 4, 5, 6]

const dobro = n => n * 2

console.log(nums.map(dobro))

const notas = [7.0, 8.7, 9.9]

const areed = m => m + 0.5

console.log(notas.map(areed))

const nomes = ['Airton', 'Vane', 'Rhuan', 'Miguel']

const letra = texto => texto[0] //acessando a primeira letra do array

const text = nomes.map(letra)

console.log(nomes, text)