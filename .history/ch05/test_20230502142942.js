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

let apple = 'sweet'
let fruits = {apple: '사과', sweet: '달다'}

console.log(fruits[apple]);
console.log(fruits.apple);


let obj = {
	cat: '냐옹',
	dog: '멍멍',
};

let dog = 'cat';	

//대괄호 표기법은 obj안에 dog프로퍼티를 찾지 않고,
//변수 dog에 cat을 대입하여 문자열값이 패스되고 cat 프로퍼티를 찾을 수 있다.

console.log(obj[dog]);   // 냐옹

//점 표기법은 변수에 접근할 수 없어 dog변수의 값 대신 dog문자열의 값을 찾는다
 obj.dog;
console.log(obj.dog);   // 멍멍
