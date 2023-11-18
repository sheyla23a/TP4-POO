// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }


  get ISBN() {
    return this._ISBN;
  }

  set ISBN(nuevoISBN) {
    this._ISBN = nuevoISBN;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(nuevoNumPaginas) {
    this._numPaginas = nuevoNumPaginas;
  }


  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`
    );
  }
}


const libro1 = new Libro(
  "978-3-16-148410-0",
  "Cien años de soledad",
  "Gabriel García Márquez",
  400
);
const libro2 = new Libro(
  "978-0-12-345678-9",
  "El señor de los anillos",
  "J.R.R. Tolkien",
  1200
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
  console.log(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
} else if (libro1.numPaginas < libro2.numPaginas) {
  console.log(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
} else {
  console.log(
    `${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas.`
  );
}
