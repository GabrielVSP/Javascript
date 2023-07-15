let val = [1, 5, 3, 8, 12, 9]
val.sort()

for(let i = 0; i < val.length; i ++)
{

    console.log(`A posição ${i} tem o valor: ${val[i]}`)

}

console.log("\nOU\n")

for (let i in val)
{

    console.log(val[i])

}