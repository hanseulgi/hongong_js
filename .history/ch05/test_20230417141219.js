function sumNum(a,b) {
    let output = 1
    for (let i = a; i <= b; i++) {
    output *= i
}
    return output
}

console.log(`2부터 4까지의 곱: ${sumNum(2, 4)}`)
console.log(`1부터 6까지의 곱: ${sumNum(1, 6)}`)

function sample(...items) {
    console.log(items)
  }
  
  sample(1,2)
  sample(1,2,3)
  sample(1,2,3,4)
