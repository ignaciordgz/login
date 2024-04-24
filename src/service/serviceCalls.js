let registerButton = document.getElementById("register")
registerButton.addEventListener("click", evento => 
{
    registrarUser()
})

let registrarUser = async () =>
{

    let user = {}

    user.username = document.getElementById("User").value
    user.password = document.getElementById("password").value

    const peticion = await fetch("http://localhost:8080/api/user",
    {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}