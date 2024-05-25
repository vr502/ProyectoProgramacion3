// Call the dataTables jQuery plugin
document.addEventListener("DOMContentLoaded", () => {
    console.log("Mensaje");
})
async function IniciarSession() {

    let datos = {};
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('loginPassword').value;
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
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Usuario/Clave Incorrectos!"
        });
    }


}
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('loginPassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.style.backgroundColor="#c24b4b";
        this.textContent = 'Ocultar';
    } else {
        passwordField.type = 'password';
        this.style.backgroundColor="#4CAF50";
        this.textContent = 'Mostrar';
    }
});
