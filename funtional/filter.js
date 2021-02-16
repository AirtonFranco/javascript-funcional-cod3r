const numbers = [1, 2, 3, 4, 5, 6]

const maiorZero = (el) => el > 0

console.log(numbers.filter(maiorZero))

const students = [
    {name: 'Airton', nota: 6.4},
    {name: 'Rhuan', nota: 8.6},
    {name: 'Miguel', nota: 9.4},
    {name: 'Vane', nota: 9.1},
]

const notas = el => el.nota >= 9

console.log(students.filter(notas))