export class Mail {
    private tipo:string;
    private direccion:string;

    constructor(tipo: string, direccion: string) {
        this.tipo = tipo;
        this.direccion = direccion;
    }

	get getTipo(): string {
		return this.tipo;
	}

	get getDireccion(): string {
		return this.direccion;
	}

	set setTipo(value: string) {
		this.tipo = value;
	}

	set setDireccion(value: string) {
		this.direccion = value;
	}
}