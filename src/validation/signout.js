function signout() {
  Swal.fire({
    title: 'La sesion  ha sido cerrada',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  }).then(() => {
    window.location = ('/')
})
  
}
