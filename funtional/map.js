//Pegando o dobro da array
const number = [1, 2, 3, 4, 5, 6]

const numberV2 = number.map((el) => {
    return el * 2
})


console.log(numberV2)

//Arredondar a nota pára cima
const students = [
    {name: 'Airton', nota: 6.4},
    {name: 'Rhuan', nota: 8.6},
    {name: 'Miguel', nota: 9.4},
    {name: 'Vane', nota: 9.1},
]

const getScore = el => el.nota //pegando a penas a nota

console.log(
    students.map(getScore).map(Math.ceil) //arredondando a nota
)