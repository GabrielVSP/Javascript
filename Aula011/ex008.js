var vel = 12
var limit = 60
var isAbove

console.log(`O carro está a: ${vel}Km/h. Olimite de velocidade é ${limit}Km/h`)

if (vel > limit)
{

    isAbove = true
    console.log("O carro está acima do limite de velocidade")

}
else
{

    isAbove = false
    console.log("O carro está dentro do limite de velocidade")

}