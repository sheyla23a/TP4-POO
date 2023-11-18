// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
    this.DNI = this.generaDNI();
  }

  mostrarGeneracion() {
    let mensaje = `La persona pertenece a la generación `;

    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      mensaje +=
        "Silent Generation. Rasgo característico: Austeridad";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      mensaje += "Baby Boom. Rasgo característico: Ambición";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      mensaje +=
        "Generación X. Rasgo característico: Obsesión por el exito";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      mensaje +=
        "Generación Y (Millennials). Rasgo característico: Frustración";
    } else if (this.anioNacimiento >= 1994) {
      mensaje +=
        "Generación Z. Rasgo característico: Nativos digitales y emprendedores.";
    } else {
      mensaje += "Generación no definida.";
    }

    console.log(mensaje);
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Sexo: ${this.sexo}
        Peso: ${this.peso} kg
        Altura: ${this.altura} m
        Año de Nacimiento: ${this.anioNacimiento}
        DNI: ${this.DNI}
      `);
  }

  generaDNI() {
    return Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
  }
}

const personaEjemplo = new Persona("Juan", 25, "H", 70, 1.75, 1940);
personaEjemplo.mostrarDatos();
console.log("Es mayor de edad:", personaEjemplo.esMayorDeEdad());
personaEjemplo.mostrarGeneracion();
