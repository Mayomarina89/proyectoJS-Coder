fetch("js/cabanas_data.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((datos) => {
    for (const generico of datos) {
      cabanas.push(
        new Cabana(
          generico.id,
          generico.cabana_nombre,
          generico.precio,
          generico.descripcion,
          generico.foto,
          generico.tipo
        )
      );
    }
    CabanasInterfaz(cabanas);
  });

// DATOS DE CLIENTE

class Cliente {
  constructor(nombre, numero, email) {
    this.nombre = nombre.toUpperCase();
    this.numero = numero;
    this.email = email;
  }
}
registrar.onclick = () => {
  Swal.fire(
    "Registrado con éxito!",
    "Pronto uno de nuestros asesores se pondrá en contacto!",
    "success"
  );
};

if ("Clientes" in localStorage) {
  const guardados = JSON.parse(localStorage.getItem("Clientes"));

  for (const generico of guardados) {
    clientes.push(
      new Cliente(generico.nombre, generico.numero, generico.email)
    );
  }
  clienteHTML(clientes);
}

registrarClientes.onsubmit = (e) => {
  e.preventDefault();
  let hijos = registrarClientes.children;
  clientes.push(new Cliente(hijos[0].value, hijos[1].value, hijos[2].value));
  clienteHTML(clientes);
  e.target.reset();
  localStorage.setItem("Clientes", JSON.stringify(clientes));
};
