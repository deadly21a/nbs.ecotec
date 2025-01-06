function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "1208303378" && password === "1208303378.Nbs") {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "inicio-estudiante.html";
        return false; // Evitar el envío del formulario después del redireccionamiento
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        return false; // Evitar el envío del formulario si las credenciales son incorrectas
    }
}