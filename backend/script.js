document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        if (email === "pedro.martins@sigma.com" && password === "123") {
            alert("Login bem-sucedido!");
            window.location.href = "home.html";
        } else {
            alert("E-mail ou senha inválidos.");
        }
    });
});


 