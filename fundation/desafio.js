//crie uma array que vai de 1 até 5
//resultado esperado [1, 2, 3, 4, 5]
function range (a) {
    const num = []

    for(let i = 1; i <= a; i++) {
        num.push(i)
    }

    return num
}

console.log(range(5))

//criar uma array de 6 a 11
//resultado esperado [6, 7, 8, 9, 10, 11]

function range1 (a, b) {
    //se b for igual undefined atribuir o valor 1 se não vai ser o valor de a
    const n1 = b === undefined ? 1 : a

    //se b for igual a undefined atribuir o valor de a se não atribuir o valor de b
    const n2 = b === undefined ? a : b

    const nums = []

    for (let i = n1; i <= n2; i++) {
        nums.push(i)
        
    }
    return nums
}

console.log(range1(6, 11))

//acrescente na array de 2 em 2
//resultado esperado [ 10, 12, 14, 16, 18 ]

function range2 (a, b, s = 2) {
    //se b for igual undefined atribuir o valor 1 se não vai ser o valor de a
    const n1 = b === undefined ? 1 : a

    //se b for igual a undefined atribuir o valor de a se não atribuir o valor de b
    const n2 = b === undefined ? a : b

    const nums = []

    for (let i = n1; i <= n2; i += s) {
        nums.push(i)
        
    }
    return nums
}

console.log(range2(10, 19))