class Cabana {
  constructor(id, cabana_nombre, precio, descripcion, foto, tipo) {
    this.id = id;
    this.cabana_nombre = cabana_nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.foto = foto;
    this.tipo = tipo;
  }
  addUnidad() {
    this.unidad++;
  }
}
