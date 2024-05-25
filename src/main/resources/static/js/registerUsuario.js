document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let datos = {};
    datos.Nombres = document.getElementById("firstname").value;
    datos.Apellidos = document.getElementById("lastname").value;
    datos.Email = document.getElementById("registerEmail").value;
    datos.phone = document.getElementById("phone").value;
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
});

document.getElementById('toggleRegisterPassword').addEventListener('click', function() {
    const passwordField = document.getElementById('registerPassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Ocultar';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Mostrar';
    }
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    const confirmPasswordField = document.getElementById('confirmPassword');
    if (confirmPasswordField.type === 'password') {
        confirmPasswordField.type = 'text';
        this.textContent = 'Ocultar';
    } else {
        confirmPasswordField.type = 'password';
        this.textContent = 'Mostrar';
    }
});
