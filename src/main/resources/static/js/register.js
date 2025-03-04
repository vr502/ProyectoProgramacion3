document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let datos = {};
    datos.nombre = document.getElementById("firstname").value;
    datos.apellido = document.getElementById("lastname").value;
    datos.email = document.getElementById("registerEmail").value;
    datos.telefono = document.getElementById("phone").value;
    datos.password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

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
    window.location.href = 'login.html'
})

document.getElementById('togglePasswords').addEventListener('click', function() {
    const passwordField = document.getElementById('registerPassword');
    const confirmPasswordField = document.getElementById('confirmPassword');
    if (passwordField.type === 'password' && confirmPasswordField.type === 'password') {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
        this.style.backgroundColor="#c24b4b";
        this.textContent = 'Ocultar Contraseña';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
        this.style.backgroundColor="#4CAF50";
        this.textContent = 'Mostrar Contraseña';
    }
});

