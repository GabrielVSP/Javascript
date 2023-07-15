const btn = document.getElementById("cntButton")
const res = document.getElementById("res")

btn.addEventListener("click", count)

function count()
{

    res.innerHTML = ""

    let init = document.getElementById("init")
    let end = document.getElementById("end")
    let pass = document.getElementById("pass")

    if (init.value.length == 0 || end.value.length == 0 || pass.value.length == 0 || Number(pass.value) <= 0)
    {

        res.innerText = "Impossível contar."

    }
    else
    {

        if (Number(init.value) > Number(end.value))
        {

            for (let i = Number(init.value); i >= Number(end.value); i -= Number(pass.value))
            {

                res.innerHTML += `... ${i} ... &#1F3C1`

            }

        }
        else
        {

            for (let i = Number(init.value); i <= Number(end.value); i += Number(pass.value))
            {

                res.innerHTML += ` ${i} \u{1F449}`

            }

        }

        res.innerHTML += `\u{1F3C1}`

    }

}
