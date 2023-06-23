function validarProveedor() {


    let nombre = document.getElementById("nombre").value;
    let documento = document.getElementById("documento").value;
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;
    let confirmContrasena = document.getElementById("contrasenaConfirm").value;
    let estado = document.getElementById("estado").value;


    let errors = []

    if (nombre.trim() === '' || documento.trim() === '' || email.trim() === '' || contrasena.trim() === '' || confirmContrasena.trim() === '' || estado.trim() === '') {
        errors.push('Por favor ingresa todos los campos')
    } else if (contrasena != confirmContrasena) {
        errors.push('Las contraseñas no coinciden')
    } else if (!isValidEmail(email)) {
        errors.push('Por favor ingrese un correo valido')
    } else if (!isValidNombre(nombre)) {
        errors.push('El nombre solo puede contener letras')
    } else if (!isValidDocument(documento)) {
        errors.push('El documento solo puede contener números')
    } if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            text: errors.join('\n')
        })
        return false
    } else {
        let form = document.getElementById('form')
        form.submit()
        swal.fire({
            icon: 'success',
            title: 'Registrado',
            text: 'Usuario registrado',
            timer: 6000
        })
    }

}


function validarEdit() {


    let nombre = document.getElementById("nombre").value;
    let documento = document.getElementById("documento").value;
    let email = document.getElementById("email").value;
    let estado = document.getElementById("estado").value;


    let errors = []

    if (nombre.trim() === '' || documento.trim() === '' || email.trim() === '' || estado.trim() === '') {
        errors.push('Por favor ingresa todos los campos')
    } else if (!isValidEmail(email)) {
        errors.push('Por favor ingrese un correo valido')
    } else if (!isValidNombre(nombre)) {
        errors.push('El nombre solo puede contener letras')
    } else if (!isValidDocument(documento)) {
        errors.push('El documento solo puede contener números')
    } if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            text: errors.join('\n')
        })
        return false
    } else {
        let form = document.getElementById('formEdit')
        form.submit()
        swal.fire({
            icon: 'success',
            title: 'Actualizado',
            text: 'Usuario actualizado',
            timer: 6000
        })
    }

}

// proveedor



// REGEX

function isValidEmail(email) {
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email)
}

function isValidNombre(nombre) {
    const nombreRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    return nombreRegex.test(nombre)
}

function isValidDocument(documento) {
    const documentRegex = /^[0-9]+$/
    return documentRegex.test(documento)
}