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

function confirmarEliProd(id_Producto) {
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
                window.location = '/deleteProducto/'+ id_Producto
            })
        }
    })
}

// Eliminar compra

function calcularSubtotal(data) {
    let subtotal = 0;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        subtotal += data[i].cantidad * data[i].precio;
      }
    }
    return subtotal;
  }
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
