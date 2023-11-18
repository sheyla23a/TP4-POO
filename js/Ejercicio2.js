// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
  constructor(titular, saldoInicial = 0) {
    this._titular = titular;
    this._saldo = saldoInicial;
  }

  get titular() {
    return this._titular;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this._saldo = nuevoSaldo;
    } else {
      console.log("El saldo no puede ser negativo.");
    }
  }

  ingresar(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(
        `Se ingresaron ${cantidad} pesos. Nuevo saldo: ${this.saldo} pesos.`
      );
    } else {
      console.log("La cantidad ingresada debe ser mayor a cero.");
    }
  }

  extraer(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(
        `Se extrajeron ${cantidad} pesos. Nuevo saldo: ${this.saldo} pesos.`
      );
    } else {
      console.log("Cantidad inválida o insuficiente fondos.");
    }
  }

  informar() {
    console.log(`Titular: ${this.titular}, Saldo actual: ${this.saldo} pesos.`);
  }
}

const cuenta = new Cuenta("Alex", 0);
cuenta.informar();
cuenta.ingresar(1000);
cuenta.extraer(500);
cuenta.informar();
