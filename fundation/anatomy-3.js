//Arrow Function is always anonymous

const xalala = (n) => {
    return n + 1
}

console.log(xalala(1))

//Esse tipo de função só funcionara se tiver apenas um unico param
const xalala1 = n => {
    return n + 1
}

console.log(xalala(1))

//Esse tipo de função só funcionara quando tiver penas um retorno

const xalala2 = n => n + 1
console.log(xalala2(1))

const sum = (a, b) => a + b
console.log(sum(1, 1))
