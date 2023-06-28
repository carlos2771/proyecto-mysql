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
    } else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    }if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: 'Estas seguro de guardar el usuario?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em',
            confirmButtonColor: '#198754'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('formUsuarios')
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Registrado',
                    text: 'Usuario registrado',
                    width: '25em',
                    confirmButtonColor: '#198754',
                    timer: 10000
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se ha guardado el usuario', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
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
    } else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    }if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: 'Estas seguro de actualizar el usuario?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em',
            confirmButtonColor: '#198754'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('formEditUsuarios')
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    text: 'Usuario actualizado',
                    width: '25em',
                    confirmButtonColor: '#198754',
                    timer: 10000
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se ha actualizado el usuario', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
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
    } else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    }if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: 'Estas seguro de guardar el proveedor?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em',
            confirmButtonColor: '#198754'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('formProveedor') 
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Registrado',
                    text: 'Proveedor agregado',
                    width: '25em',
                    timer: 10000,
                    confirmButtonColor: '#198754'
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se guardado el proveedor', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
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
    }else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    } if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: 'Estas seguro de actualizar el proveedor?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em',
            confirmButtonColor: '#198754'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('formEditProveedor') 
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    text: 'Proveedor actualizado',
                    width: '25em',
                    timer: 10000,
                    confirmButtonColor: '#198754'
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se ha actualizado el proveedor', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
          })
    }

}


// Validar agregar producto

function validarProducto() {


    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let estado = document.getElementById("estado").value;
    let proveedor = document.getElementById("proveedor").value;


    let errors = []

    if (nombre.trim() === '' || precio.trim() === '' || cantidad.trim() === '' || estado.trim() === '' || proveedor.trim()=== '') {
        errors.push('Por favor ingresa todos los campos')
    } else if (!isValidDocument(cantidad)) {
        errors.push('La cantidad solo puede contener números')
    } else if (!isValidDocument(precio)) {
        errors.push('El precio no puede contener letras')
    } else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    }if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: '¿Estas seguro de guardar el producto?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em',
            confirmButtonColor: '#198754'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('formProducto')
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Registrado',
                    text: 'Producto registrado',
                    width: '25em',
                    confirmButtonColor: '#198754',
                    timer: 10000
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se ha registrado el producto', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
          })
    }

}


function validarEditarProducto() {


    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let estado = document.getElementById("estado").value;
    // let proveedor = document.getElementById("proveedor").value;


    let errors = []

    if (nombre.trim() === '' || precio.trim() === '' || cantidad.trim() === '' || estado.trim() === '') {
        errors.push('Por favor ingresa todos los campos')
    } else if (!isValidDocument(cantidad)) {
        errors.push('La cantidad solo puede contener números')
    } else if (!isValidDocument(precio)) {
        errors.push('El precio no puede contener letras')
    } else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    }if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: '¿Estas seguro de actualizar el producto?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('formEditProducto')
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    text: 'Producto actualizado',
                    width: '25em',
                    confirmButtonColor: '#198754',
                    timer: 10000
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se ha actualizado el producto', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
          })
    }

}


function validarRegUsuario() {


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
    } else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    }if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: 'Estas seguro de registrar el usuario?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em',
            confirmButtonColor: '#198754'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('formRegUsuarios')
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Registrado',
                    text: 'Usuario registrado',
                    width: '25em',
                    confirmButtonColor: '#198754'             
                }).then(() => {
                    window.location = '/login'
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se ha registrado el usuario', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
          })
    } 

}


function validarCompra() {
    let fecha = document.getElementById("fecha").value;
    let cantidad = document.getElementById("cantidad").value;
    let total = document.getElementById("total").value;
    let estado = document.getElementById("estado").value;
    let productos = document.getElementById("producto").value;

    let errors = []

    if (fecha.trim() === '' || cantidad.trim() === '' || total.trim() === '' || estado.trim() === '' || productos.trim() === '') {
        errors.push('Por favor ingresa todos los campos')
    } else if (!isValidDocument(cantidad)) {
        errors.push('La cantidad solo puede contener números')
    } else if (!isValidDocument(total)) {
        errors.push('El Total solo puede contener números')
    } else if (estado != '0' && estado != '1'){
        errors.push('El estado solo puede ser activo(1) o inactivo(0)')
    }if (errors.length > 0) {
        swal.fire({
            icon: 'error',
            title: 'Error en la validación',
            width: '25em',
            text: errors.join('\n'),
            confirmButtonColor: '#198754'
        })
        return false
    } else {
        Swal.fire({
            title: '¿Estas seguro agregar la compra?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#198754',
            denyButtonText: `No guardar`,
            width: '25em'
          }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById('agregarCompra')
                form.submit()
                swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    text: 'Compra registrada',
                    width: '25em',
                    confirmButtonColor: '#198754',
                    timer: 10000
                })
            } else if (result.isDenied) {
              Swal.fire({
                icon: 'info', 
                text: 'No se ha registrado la compra', 
                width: '25em',
                confirmButtonColor: '#198754'
              })
            }
          })
    }



}