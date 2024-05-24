document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulación de autenticación (en un escenario real, realizar la verificación del lado del servidor)
    if (email === 'usuario@example.com' && password === 'password123') {
        // Autenticación exitosa, redirigir a la página principal
        window.location.href = 'index.html';
    } else {
        // Autenticación fallida, mostrar mensaje de error
        document.getElementById('loginError').textContent = 'Correo electrónico o contraseña incorrectos';
    }
});

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
