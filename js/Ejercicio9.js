// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log("¡Soy un animal y emito un sonido!");
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }

  emitirSonido() {
    console.log("¡Guau, guau!");
  }
}

class Gato extends Animal {
  constructor(nombre, edad, color) {
    super(nombre, edad);
    this.color = color;
  }

  emitirSonido() {
    console.log("¡Miau, miau!");
  }
}

const perro = new Perro("Buddy", 3, "Labrador");
console.log(
  `Nombre: ${perro.nombre}, Edad: ${perro.edad}, Raza: ${perro.raza}`
);
perro.emitirSonido();

const gato = new Gato("Whiskers", 2, "Blanco y negro");
console.log(`Nombre: ${gato.nombre}, Edad: ${gato.edad}, Color: ${gato.color}`);
gato.emitirSonido();
