document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let datos = {};
    datos.nombre = document.getElementById("firstname").value;
    datos.apellido = document.getElementById("lastname").value;
    datos.email = document.getElementById("email").value;
    datos.telefono = document.getElementById("phone").value;
    datos.password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (confirmPassword !== datos.password) {
        alert('Las contraseñas no coinciden');
        return;
    }
    // Simulación de registro (en un escenario real, realizar la verificación del lado del servidor)
    await fetch('api/registro', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    alert("Usuario creado exitosamente");
    cargarUsuarios();
    document.getElementById('registerForm').reset();

})

