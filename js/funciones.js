function CabanasInterfaz(lista) {
  divCabanas.innerHTML = "";
  for (const cabana of lista) {
    let div = document.createElement("div");
    divCabanas.classList.add("col");
    div.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
      <img src="${cabana.foto}" class="card-img img-thumbnail rounded-start " alt="imagen cabañas">
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title pb-2">${cabana.cabana_nombre}</h5>
        <h6 class="card-subtitle">${cabana.tipo}</h6>
          <p class="card-text">${cabana.descripcion}</p>
          <p class="card-text"><small class="text-muted"> $ ${cabana.precio}</small></p>
          <button id="${cabana.id}" class="btn btn-success btnContacto" >Contacto</button>
        </div>
      </div>
    </div>
  </div>`;

    divCabanas.append(div);
  }
  eventoBoton();
}

function eventoBoton() {
  for (const boton of botones) {
    boton.addEventListener("click", function () {
      let seleccion = cabanas.find((cabana) => cabana.id == this.id);
      Swal.fire({
        title:
          "<p>Te interesa la propiedad </p> " + seleccion.cabana_nombre + "?",
        icon: "success",
        html:
          "Escribinos a nuestro " +
          '<a href="//https://walink.co/94ec93">Whatsapp</a> ' +
          "y estaremos felices de coordinar una visita",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> De acuerdo!',
        confirmButtonAriaLabel: "De Acuerdo!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Cancelar",
      });
    });
  }
}

function clienteHTML(lista) {
  espacioClientes.innerHTML = "";
  for (const contacto of lista) {
    let div = document.createElement("div");
    div.innerHTML = `<h3> Nombre: ${contacto.nombre} - 
                        Celular: ${contacto.numero} - 
                        Email: ${contacto.email}</h3>`;
    espacioClientes.append(div);
  }
}
