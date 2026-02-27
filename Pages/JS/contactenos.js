emailjs.init("QTc0O7tLncfO5cdP1");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.nombre.value.trim();
  const age = this.edad.value.trim();
  const mail = this.correo.value.trim();
  const num = this.telefono.value.trim();
  const consul = this.Consulta.value.trim();

  if (name === "" || age === "" || mail === "" || num === "" || consul === "") {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se pueden introducir campos vacios!',
    });
    return;
  }
  emailjs.sendForm("service_m2eqt8r", "template_1iars1m", this)
    .then(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mensaje enviado correctamente!!',
        showConfirmButton: false,
        timer: 1500

      });
      this.reset();
    })

    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje',
        footer: JSON.stringify(err)
      });
    });
});
