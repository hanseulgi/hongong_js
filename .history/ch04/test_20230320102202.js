

let output = ''

// 중첩 반복문
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < i; j++) {
      output += '*'
    }
    output += '\n'
  }

  // 출력합니다.
  console.log(output)
