const btn = document.getElementById("cntButton")
const select = document.getElementById("tabuada")
const res = document.getElementById("res")

btn.addEventListener("click", makeTab)

function makeTab()
{

    let numEl = document.getElementById("num")
    select.innerHTML = null

    if (numEl.value.length == 0)
    {

        alert("Digite um número")

    }
    else
    {

        let num  = Number(numEl.value)

        for (let i = 1; i <= 10; i++)
        {

            let textEl = document.createElement("option")
            textEl.value = `i${i}`
            textEl.innerHTML = `${num} x ${i} = ${num * i}`

            select.appendChild(textEl)

        }

    }

}