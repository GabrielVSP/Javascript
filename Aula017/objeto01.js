let amigo = {nome: "José", sexo: "M", peso: 85.74,
engordar(p = 0){

    console.log("Engordou!")
    this.peso += p

}}

amigo.engordar(12)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)