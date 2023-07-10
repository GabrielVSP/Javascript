function verify()
{

    var date = new Date
    var year = date.getFullYear()

    var userYr = document.getElementById("iano")
    var res = document.getElementById("res")

    if (userYr.value.length == 0 || userYr.value > year)
    {

        alert("seu bosta")

    }
    else
    {

        var sex = document.getElementsByName("radsex")
        var idade = year - userYr.value
        var img = document.createElement("img")
        img.setAttribute("id", "img")

        var gen = ""

        if(sex[0].checked)
        {

            gen = "Masculino"

            if (idade >= 0 && idade < 12)
            {

                img.src = "criancaH.jpg"
                //img.setAttribute("src", "criancaH.jpg")

            }
            else if (idade >= 12 && idade < 21)
            {

                img.setAttribute("src", "jovemH.jpg")

            }
            else if (idade >= 12 && idade < 50)
            {

                img.setAttribute("src", "adultoH.jpg")

            }
            else
            {

                img.setAttribute("src", "idosoH.jpg")

            }

        }
        else
        {

            gen = "Feminino"

            if (idade >= 0 && idade < 12)
            {

                img.src = "criancaM.jpg"
                //img.setAttribute("src", "criancaH.jpg")

            }
            else if (idade >= 12 && idade < 21)
            {

                img.setAttribute("src", "jovemM.jpg")

            }
            else if (idade >= 12 && idade < 50)
            {

                img.setAttribute("src", "adultoM.jpg")

            }
            else
            {

                img.setAttribute("src", "idosoM.jpg")

            }

        }
 
        res.innerHTML = `Nascido em ${userYr.value}, tem ${idade} anos e é do gênero ${gen}`
        res.appendChild(img)

    }

}