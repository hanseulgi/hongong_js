// function sumNum(a,b) {
//     let output = 1
//     for (let i = a; i <= b; i++) {
//     output *= i
// }
//     return output
// }

// console.log(`2부터 4까지의 곱: ${sumNum(2, 4)}`)
// console.log(`1부터 6까지의 곱: ${sumNum(1, 6)}`)

// 나머지 매개변수를 사용한 함수 만들기
function min(...items) {
    // 매개변수 items는 배열처럼 사용합니다.
    let output = items[0]
    for (const item of items) { // 반복변수와 배열
      if (output > item) {
        output = item
      }
    }
    return output
  }
  
  // 함수 호출하기
  console.log('min(52,273,32,103,275,24,57)')
  console.log(`=${min(52,273,32,103,275,24,57)}`)
