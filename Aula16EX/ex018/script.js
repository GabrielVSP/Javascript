const addBtn = document.getElementById("addButton")
const analBtn = document.getElementById("analButton")
const select = document.getElementById("list")
const res = document.getElementById("res")

const values = []

addBtn.addEventListener("click", addNumber)
analBtn.addEventListener("click", analList)

function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
  
  function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }

function addNumber()
{

    const ninput = document.getElementById("num")
    const num = Number(ninput.value)

    if (num >= 1 && num <= 100 && values.includes(num) == false)
    {

        values.push(num)

        let numItem = document.createElement("option")
        numItem.innerHTML = `Valor${values.indexOf(num) + 1}: ${num}`

        select.appendChild(numItem)
        res.innerHTML = null

    }
    else
    {

        alert("Valor inválido ou já existe na lista.")

    }

}

function analList()
{

    if (values.length != 0)
    {

        let sum = 0
        let max = arrayMax(values)
        let min = arrayMin(values)

        res.innerHTML = ""

        let allInfo = document.createElement("p")
        let maxInfo = document.createElement("p")
        let minInfo = document.createElement("p")
        let sumInfo = document.createElement("p")
        let medInfo = document.createElement("p")

        allInfo.innerHTML = `Ao todo, temos ${values.length} números cadastrados na lista.`
        maxInfo.innerHTML = `O maior valor informado foi: ${max}`
        minInfo.innerHTML = `O menor valor informado foi: ${min}`
        
        for (let nums in values)
        {

            sum += Number(values[nums])

        }

        sumInfo.innerHTML = `A soma de todos os elementos é: ${sum}`
        medInfo.innerHTML = `A média dos valores é: ${sum / values.length}`

        res.appendChild(allInfo)
        res.appendChild(maxInfo)
        res.appendChild(minInfo)
        res.appendChild(sumInfo)
        res.appendChild(medInfo)

    }
    else
    {

        alert("Impossivel analisaruma lista vazia.")

    }
    

}
