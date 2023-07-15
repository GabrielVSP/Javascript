const num = [5, 8, 9, 2, 3]

/*console.log(`Os elementos do vetor são: ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro elemento é: ${num[0]}`)
console.log(`O vetor em ordem crescente é: ${num.sort()}\n`)*/

num.push(12)
num[0] = 1

console.log(`Os elementos do vetor agora são: ${num}`)
console.log(`O vetor agora tem ${num.length} elementos`)
console.log(`O primeiro elemento agora é: ${num[0]}`)
console.log(`O vetor em ordem crescente agora é: ${num.sort()}`)

console.log(`O número 8 está na posição: ${num.indexOf(8)}`)