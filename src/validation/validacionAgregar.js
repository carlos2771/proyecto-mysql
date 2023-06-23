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

// function isValidEstado(estado) {
//     const documentRegex = /^[0-1]+$/
//     return documentRegex.test(documento)
// }

// Validaciones de agregar usuario
function validarUsuario() {


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
        let form = document.getElementById('formUsuarios')
        form.submit()
        swal.fire({
            icon: 'success',
            title: 'Registrado',
            text: 'Usuario registrado',
            timer: 10000
        })
    }

}

// Validacion Editar Usuario
function validarEditarUsuario() {


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
        let form = document.getElementById('formEditUsuarios')
        form.submit()
        swal.fire({
            icon: 'success',
            title: 'Actualizado',
            text: 'Usuario actualizado',
            timer: 10000
        })
    }

}



// Validacion Agregar Proveedor
function validarProveedor() {

    let nit = document.getElementById("nit").value;
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let estado = document.getElementById("estado").value;
    let persona_Encargada = document.getElementById("persona_Encargada").value;
    let telefono_PE = document.getElementById("telefono_PE").value;


    let errors = []

    if (nit.trim()==='' || nombre.trim() === '' || telefono.trim() === '' || email.trim() === '' || direccion.trim() === '' || estado.trim() === '' || persona_Encargada.trim() === '' || telefono_PE.trim() === '') {
        errors.push('Por favor ingresa todos los campos')
    }else if (!isValidDocument(nit)) {
        errors.push('El nit solo puede contener números')
    }else if (!isValidNombre(nombre)) {
        errors.push('El nombre del proveedor solo puede contener letras')
    }else if (!isValidDocument(telefono) || telefono.length < 7 || telefono.length > 10) {
        errors.push('El telefono solo puede contener números y debe tener entre 7 y 10 caracteres')
    } else if (!isValidEmail(email)) {
        errors.push('Por favor ingrese un correo valido')
    } else if (!isValidNombre(persona_Encargada)) {
        errors.push('El nombre de la persona encargada solo puede contener letras')
    } else if (!isValidDocument(telefono_PE) || telefono_PE.length < 7 || telefono_PE.length > 10) {
        errors.push('El telefono de la persona encargada solo puede contener números y debe tener entre 7 y 10 caracteres')
    } if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            text: errors.join('\n')
        })
        return false
    } else {
        let form = document.getElementById('formProveedor')
        form.submit()
        swal.fire({
            icon: 'success',
            title: 'Registrado',
            text: 'Proveedor registrado',
            timer: 10000
        })
    }

}


// Validaciones editar proveedor
function validarEditarProveedor() {

    let nit = document.getElementById("nit").value;
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let estado = document.getElementById("estado").value;
    let persona_Encargada = document.getElementById("persona_Encargada").value;
    let telefono_PE = document.getElementById("telefono_PE").value;


    let errors = []

    if (nit.trim()==='' || nombre.trim() === '' || telefono.trim() === '' || email.trim() === '' || direccion.trim() === '' || estado.trim() === '' || persona_Encargada.trim() === '' || telefono_PE.trim() === '') {
        errors.push('Por favor ingresa todos los campos')
    }else if (!isValidDocument(nit)) {
        errors.push('El nit solo puede contener números')
    }else if (!isValidNombre(nombre)) {
        errors.push('El nombre del proveedor solo puede contener letras')
    }else if (!isValidDocument(telefono) || telefono.length < 7 || telefono.length > 10) {
        errors.push('El telefono solo puede contener números y debe tener entre 7 y 10 caracteres')
    } else if (!isValidEmail(email)) {
        errors.push('Por favor ingrese un correo valido')
    } else if (!isValidNombre(persona_Encargada)) {
        errors.push('El nombre de la persona encargada solo puede contener letras')
    } else if (!isValidDocument(telefono_PE) || telefono_PE.length < 7 || telefono_PE.length > 10) {
        errors.push('El telefono de la persona encargada solo puede contener números y debe tener entre 7 y 10 caracteres')
    } if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            text: errors.join('\n')
        })
        return false
    } else {
        let form = document.getElementById('formEditProveedor')
        form.submit()
        swal.fire({
            icon: 'success',
            title: 'Registrado',
            text: 'Proveedor registrado',
            timer: 10000
        })
    }

}