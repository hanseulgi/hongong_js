function sumNum(a,b) {
    let output = 1
    for (let i = a; i <= b; i++) {
    output *= i
}
    return output
}

console.log(`1부터 100까지의 곱: ${sumNum(2, 4)}`)
console.log(`1부터 500까지의 곱: ${sumNum(1, 6)}`)

