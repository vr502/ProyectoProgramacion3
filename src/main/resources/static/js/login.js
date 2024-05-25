// Call the dataTables jQuery plugin
document.addEventListener("DOMContentLoaded", () => {
    console.log("Mensaje");
})
async function IniciarSession() {

    let datos = {};
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;
    console.log(datos);
    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const respuesta = await request.text();
    if(respuesta != 'FAIL' ){
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        window.location.href = "index.html";
    } else {
        alert("Email o contraseña incorrectos")
    }


}
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('loginPassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Ocultar';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Mostrar';
    }
});
