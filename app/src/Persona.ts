import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

export class Persona {
    private nombre:string;
    private apellidos:string;
    private edad:number;
    private dni:string;
    private cumpleanos:string;
    private colorFavorito:string;
    private sexo:string;
    private direcciones:Direccion;
    private mails:Mail[];
    private telefonos:Telefono[];
    private notas:string;

	constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: string, colorFavorito: string, sexo: string, direcciones: Direccion, mails: Mail[], telefonos: Telefono[], notas: string) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
		this.dni = dni;
		this.cumpleanos = cumpleanos;
		this.colorFavorito = colorFavorito;
		this.sexo = sexo;
		this.direcciones = direcciones;
		this.mails = mails;
		this.telefonos = telefonos;
		this.notas = notas;
	}

	get getNombre(): string {
		return this.nombre;
	}

	get getApellidos(): string {
		return this.apellidos;
	}

	get getEdad(): number {
		return this.edad;
	}

	get getDni(): string {
		return this.dni;
	}

	get getCumpleanos(): string {
		return this.cumpleanos;
	}

	get getColorFavorito(): string {
		return this.colorFavorito;
	}

	get getSexo(): string {
		return this.sexo;
	}

	get getDirecciones(): Direccion {
		return this.direcciones;
	}

	get getMails(): Mail[] {
		return this.mails;
	}

	get getTelefonos(): Telefono[] {
		return this.telefonos;
	}

	get getNotas(): string {
		return this.notas;
	}

	set setNombre(value: string) {
		this.nombre = value;
	}

	set setApellidos(value: string) {
		this.apellidos = value;
	}

	set setEdad(value: number) {
		this.edad = value;
	}

	set setDni(value: string) {
		this.dni = value;
	}

	set setCumpleanos(value: string) {
		this.cumpleanos = value;
	}

	set setColorFavorito(value: string) {
		this.colorFavorito = value;
	}

	set setSexo(value: string) {
		this.sexo = value;
	}

	set setDirecciones(value: Direccion) {
		this.direcciones = value;
	}

	set setMails(value: Mail[]) {
		this.mails = value;
	}

	set setTelefonos(value: Telefono[]) {
		this.telefonos = value;
	}

	set setNotas(value: string) {
		this.notas = value;
	}

    public imprimirPersona() {
        let direccion = this.getDirecciones;
        let telefono = this.getTelefonos;
		let email = this.getMails;
        let personaDetalle = {
            "Nombre": this.nombre,
            "Apellidos": this.apellidos,
            "Edad": this.edad,
            "DNI" : this.dni,
            "Cumpleaños": this.cumpleanos,
            "Color Favorito": this.colorFavorito,
            "Sexo": this.sexo,
            "Dirección": {
                "Calle": direccion.getCalle,
                "Numero": direccion.getNumero,
                "Piso": direccion.getPiso,
                "CP": direccion.getCodigoPostal,
                "Ciudad": direccion.getPoblacion,
                "Provincia": direccion.getProvincia
            },
            "Teléfonos": this.mostrarDatos(telefono),
            "Emails": this.mostrarDatos(email)
            
       }
        console.log( personaDetalle )
    }

    public buscarDni(numerodeDni:string) {
        if(numerodeDni != this.dni) {
            throw new Error("El DNI no coincide");
        } else {
            return true;
        }
    }

	public mostrarDatos(datos){	
		let dato={};	
		for (var i = 0; i < datos.length; i++) {
			if (datos[i].getDireccion) {
				dato[i] = datos[i].getTipo + ": " + datos[i].getDireccion;
			} else {
				dato[i] = datos[i].getTipo + ": " + datos[i].getNumero;
			}
		}
		return dato;
	}
}