function sumNum(a,b) {
    let output = 1
    for (let i = a; i <= b; i++) {
    output *= i
}
    return output
}

console.log(`2부터 4까지의 곱: ${sumNum(2, 4)}`)
console.log(`1부터 6까지의 곱: ${sumNum(1, 6)}`)


console.log(`--------------------------------------`)


function min(...items) {
    let output = items[0]
    for (const item of items) {
        if (output > item) {
            output = item
        }
    }
    return output
}

// 함수 호출하기
console.log('min(52,273,32,103,275,24,57)')
console.log(`=${min(52,273,32,103,275,24,57)}`)

