const p = new Promise((cPromise) => {
    cPromise({
        x: 3,
        y: 5
    })
})

p.then((valor) => {
    console.log(valor.y)
})