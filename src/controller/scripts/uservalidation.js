document.querySelector('form').addEventListener("submit", async function uservalidation(events) {
   
    event.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password")

    const response = await fetch("https://localhost:3306/src/model/db/uservalidation.php", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})

    });

    const data = await response.json();

    if (response.ok) {
        alert("Login realizado");
        localStorage.setItem("token", data.token);
    } else {
        alert("Error:" + data.menssage );
    }
});