document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('registerError').textContent = 'Las contraseñas no coinciden';
        return;
    }

    // Simulación de registro (en un escenario real, realizar la verificación del lado del servidor)
    alert('Registro exitoso');
    window.location.href = 'login.html';
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
