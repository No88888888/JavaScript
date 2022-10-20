// 1. 배열에 담긴 중복된 이름을 {'이름': 수} 형태의 object로 반환하세요.

const names = ['harry', 'aiden', 'julie', 'julie', 'edward']

// answer
const numnames = names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0)+1
    return acc
}, {})
    
console.log(numnames)