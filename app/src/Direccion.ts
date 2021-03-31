export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigoPostal: number;
    private poblacion: string;
    private provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string) {
		this.calle = calle;
		this.numero = numero;
		this.piso = piso;
		this.letra = letra;
		this.codigoPostal = codigoPostal;
		this.poblacion = poblacion;
		this.provincia = provincia;
	}

    get getCalle(): string {
		return this.calle;
	}

	get getNumero(): number {
		return this.numero;
	}

	get getPiso(): number {
		return this.piso;
	}

	get getLetra(): string {
		return this.letra;
	}

	get getCodigoPostal(): number {
		return this.codigoPostal;
	}

	get getPoblacion(): string {
		return this.poblacion;
	}

	get getProvincia(): string {
		return this.provincia;
	}

	set setCalle(value: string) {
		this.calle = value;
	}

	set setNumero(value: number) {
		this.numero = value;
	}

	set setPiso(value: number) {
		this.piso = value;
	}

	set setLetra(value: string) {
		this.letra = value;
	}

	set setCodigoPostal(value: number) {
		this.codigoPostal = value;
	}

	set setPoblacion(value: string) {
		this.poblacion = value;
	}


	set setProvincia(value: string) {
		this.provincia = value;
	}
}

