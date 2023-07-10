function load()
{

    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    
    var date = new Date
    var hour = date.getHours()
    
    msg.innerHTML = `Agora são ${hour} horas.`

    if (hour >= 6 && hour < 12)
    {

        img.src = "manha.jpg"
        img.alt = "É de manhã!"

        document.body.style.backgroundColor = "#af8f78"

    }
    else if (hour >= 12 && hour < 18)
    {

        img.src = "tarde.jpg"
        img.alt = "É de tarde!"

        document.body.style.backgroundColor = "#71a75a"

    }
    else
    {

        img.src = "noite.jpg"
        img.alt = "É de noite!"

        document.body.style.backgroundColor = "#015653"

    }

}




