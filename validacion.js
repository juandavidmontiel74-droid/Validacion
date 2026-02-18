let form = document.getElementById('form');
let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensaje");
let password = document.getElementById("password");
let pwdMensaje = document.getElementById("pwdMensaje");


usuario.addEventListener("input", function () {
    const orig = this.value;
    const sanitized = orig.replace(/[^a-zA-Z0-9._-]/g, '');
    this.value = sanitized; 

    if (orig !== sanitized) {
        this.style.border = "2px solid red";
        mensaje.textContent = "Está intentando escribir algo inválido";
        mensaje.style.color = "red";
    } else if (sanitized.length < 3) {
        this.style.border = "2px solid red";
        mensaje.textContent = "Usuario debe tener mínimo 3 caracteres";
        mensaje.style.color = "red";
    } else {
        this.style.border = "2px solid green";
        mensaje.textContent = "Usuario válido";
        mensaje.style.color = "green";
    }
});


password && password.addEventListener("input", function () {
    let fb = pwdMensaje || (function(){ let s = document.createElement('span'); s.id = 'pwdMensaje'; this.parentNode.insertBefore(s, this.nextSibling); return s; }).call(this);
    if (this.value.length >= 10) {
        this.style.border = "2px solid green";
        fb.textContent = "Contraseña válida";
        fb.style.color = "green";
    } else {
        this.style.border = "2px solid red";
        fb.textContent = "La contraseña debe tener al menos 10 caracteres";
        fb.style.color = "red";
    }
});

form && form.addEventListener('submit', function(e){
    e.preventDefault();
    if (usuario.value.length < 3) usuario.focus();
    else if (password.value.length < 10) password.focus();
});