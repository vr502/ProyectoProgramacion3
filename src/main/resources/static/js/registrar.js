// Call the dataTables jQuery plugin
document.addEventListener("DOMContentLoaded", () => {
    console.log("Mensaje");
})
async function registrarUsuario() {
    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.telefono = document.getElementById('txtTelefono').value;
    datos.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtRepetirPassword').value;

    if (repetirPassword !== datos.password) {
        alert('La contraseña que escribiste es diferente.');
        return;
    }

    await fetch('api/registro', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    alert("Usuario creado exitosamente");
    window.location.href = 'login.html'

}


