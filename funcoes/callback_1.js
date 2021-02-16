function cb (fn, b , c) {
    return fn(b, c)
}

const subtrair = (x, z) => x - z

const r = cb(subtrair, 50, 30)

console.log(r)


setInterval(() => console.log('exec'), 2000)

function App(params) {
    setInterval(() => {
        return console.log(1 + 1)
    }, 1000);
}

App()