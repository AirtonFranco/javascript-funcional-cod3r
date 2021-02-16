//passando uma função como parametro para outra função

function run(fn) {
    return fn()
}

function sayHello() {
    console.log('hello')
}

run(sayHello)

run(()=> {
    console.log('oi')
})

const result = run(Math.random)
console.log(result)