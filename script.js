function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "2615") {
        window.location.href = "acceso_concedido.html";
    } else {
        document.getElementById("message").innerHTML = "Código incorrecto. Inténtalo de nuevo.";
    }
}
