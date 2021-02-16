//currin

function finalPrice (tax) {
    return function (price) {
        return tax + price
    }
}

console.log(finalPrice(0.0084)(27.9))
const result = finalPrice(0.0084)
console.log(result(27.9))