// 7- Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
// Los métodos de la agenda serán los siguientes:
// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.
// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class AgendaTelefonica {
  constructor() {
    this.contactos = [];
  }

  aniadirContacto(nombre, telefono) {
    const nuevoContacto = new Contacto(nombre, telefono);
    this.contactos.push(nuevoContacto);
    console.log(`Contacto ${nombre} añadido a la agenda.`);
  }

  buscarContacto(nombre) {
    let encontrado = false;

    for (const contacto of this.contactos) {
      if (contacto.nombre === nombre) {
        console.log(
          `Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`
        );
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(nombre) {
    let indiceEliminar = -1;

    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === nombre) {
        indiceEliminar = i;
        break;
      }
    }

    if (indiceEliminar !== -1) {
      this.contactos.splice(indiceEliminar, 1);
      console.log(`Contacto ${nombre} eliminado de la agenda.`);
    } else {
      console.log(
        `No se encontró ningún contacto con el nombre ${nombre}. No se pudo eliminar.`
      );
    }
  }

  listarContactos() {
    console.log("Lista de contactos:");
    for (const contacto of this.contactos) {
      console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    }
  }
}

const agenda = new AgendaTelefonica();

function menu() {
  while (true) {
    const opcion = prompt(`\nMenu:
      1. Añadir contacto
      2. Buscar contacto
      3. Eliminar contacto
      4. Listar contactos
      5. Salir
  
      Ingresa el número de la opción:`);

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        agenda.aniadirContacto(nombre, telefono);
        break;
      case "2":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
      case "3":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        agenda.eliminarContacto(nombreEliminar);
        break;
      case "4":
        agenda.listarContactos();
        break;
      case "5":
        console.log("Saliendo del programa.");
        return;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
  }
}

menu();
