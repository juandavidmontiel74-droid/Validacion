let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensaje");

usuario.addEventListener("input", function () {

    let valor = this.value;

    if (/[^a-zA-Z]/.test(valor)) {
        this.style.border = "2px solid red";
        mensaje.textContent = "Usuario incorrecto";
        mensaje.style.color = "red";
    } 
    else if (valor === "") {
        this.style.border = "2px solid red";
        mensaje.textContent = "Campo obligatorio";
        mensaje.style.color = "red";
    } 
    else {
        this.style.border = "2px solid green";
        mensaje.textContent = "Usuario válido";
        mensaje.style.color = "green";
    }

    this.value = valor.replace(/[^a-zA-Z]/g, '');
});

// agregado: validación mínima para contraseña (10+ caracteres)
let password = document.getElementById("password");
password && password.addEventListener("input", function () {
    let fb = this.nextElementSibling;
    if (!fb || fb.id === 'mensaje') {
        fb = document.createElement('span');
        fb.className = 'form-text';
        this.parentNode.insertBefore(fb, this.nextSibling);
    }
    if (this.value.length >= 10) {
        this.style.border = '2px solid green';
        fb.textContent = 'Contraseña válida';
        fb.style.color = 'green';
    } else {
        this.style.border = '2px solid red';
        fb.textContent = 'La contraseña debe tener al menos 10 caracteres';
        fb.style.color = 'red';
    }
});