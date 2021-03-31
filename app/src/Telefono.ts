export class Telefono {
    private tipo:string;
    private numero:Number;

	constructor(tipo: string, numero: Number) {
		this.tipo = tipo;
		this.numero = numero;
    }

	get getTipo(): string {
		return this.tipo;
	}

	get getNumero(): Number {
		return this.numero;
	}

	set setTipo(value: string) {
		this.tipo = value;
	}

	set setNumero(value: Number) {
		this.numero = value;
	}
}