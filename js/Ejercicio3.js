// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  modificar(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
    console.log("¡Propiedades modificadas!");
  }

  mostrar() {
    console.log(`Ancho: ${this.ancho}, Alto: ${this.alto}`);
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.alto);
  }

  calcularArea() {
    return this.ancho * this.alto;
  }
}

const miRectangulo = new Rectangulo(5, 8);
console.log("Propiedades iniciales:");
miRectangulo.mostrar();

miRectangulo.modificar(10, 15);

console.log("Propiedades actualizadas:");
miRectangulo.mostrar();

console.log("Perímetro:", miRectangulo.calcularPerimetro());
console.log("Área:", miRectangulo.calcularArea());
