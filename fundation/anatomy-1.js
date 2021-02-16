// function declaration

function sayHello () {
    console.log ('Hello')
}

sayHello()

function sayHelloTo(name) {
    //console.log('Hello ' + name)
    console.log(`Hello ${name}`) //Template String
}

sayHelloTo('Airton')

function Hi(nome) {
    return `Hi ${nome}`
}

console.log(Hi('Rhuan'))

const ola = Hi('Silvane')
console.log(ola)