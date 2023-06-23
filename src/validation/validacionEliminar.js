function confirmarUsu(id) {
    Swal.fire({
        title: '¿Estas seguro de eliminarlo?',
        text: "¡No podras reversar esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF0000',
        cancelButtonColor: '#808080',
        confirmButtonText: 'Si, Eliminarlo!',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado',
                'success'
            ).then(() => {
                window.location = '/delete/' + id
            })
        }
    })
}

// Eliminar proveedores

function confirmarEliProv(id) {
    Swal.fire({
        title: '¿Estas seguro de eliminarlo?',
        text: "¡No podras reversar esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF0000',
        cancelButtonColor: '#808080',
        confirmButtonText: 'Si, Eliminarlo!',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado',
                'success'
            ).then(() => {
                window.location = '/deleteProveedor/'+ id
            })
        }
    })
}


// Eliminar producto

function confirmarEliProd(id) {
    Swal.fire({
        title: '¿Estas seguro de eliminarlo?',
        text: "¡No podras reversar esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF0000',
        cancelButtonColor: '#808080',
        confirmButtonText: 'Si, Eliminarlo!',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado',
                'success'
            ).then(() => {
                // window.location = '/deleteProducto/'+ id
            })
        }
    })
}

// Eliminar compra

function confirmarEliCom(id) {
    Swal.fire({
        title: '¿Estas seguro de eliminarlo?',
        text: "¡No podras reversar esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF0000',
        cancelButtonColor: '#808080',
        confirmButtonText: 'Si, Eliminarlo!',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado',
                'success'
            ).then(() => {
                // window.location = '/deleteCompra/'+ id
            })
        }
    })
}
