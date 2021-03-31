"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getApellidos", {
        get: function () {
            return this.apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getEdad", {
        get: function () {
            return this.edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getDni", {
        get: function () {
            return this.dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getCumpleanos", {
        get: function () {
            return this.cumpleanos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getColorFavorito", {
        get: function () {
            return this.colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getSexo", {
        get: function () {
            return this.sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getDirecciones", {
        get: function () {
            return this.direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getMails", {
        get: function () {
            return this.mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getTelefonos", {
        get: function () {
            return this.telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getNotas", {
        get: function () {
            return this.notas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (value) {
            this.nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setApellidos", {
        set: function (value) {
            this.apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setEdad", {
        set: function (value) {
            this.edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setDni", {
        set: function (value) {
            this.dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setCumpleanos", {
        set: function (value) {
            this.cumpleanos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setColorFavorito", {
        set: function (value) {
            this.colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setSexo", {
        set: function (value) {
            this.sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setDirecciones", {
        set: function (value) {
            this.direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setMails", {
        set: function (value) {
            this.mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setTelefonos", {
        set: function (value) {
            this.telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNotas", {
        set: function (value) {
            this.notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.imprimirPersona = function () {
        var direccion = this.getDirecciones;
        var telefono = this.getTelefonos;
        var email = this.getMails;
        var personaDetalle = {
            "Nombre": this.nombre,
            "Apellidos": this.apellidos,
            "Edad": this.edad,
            "DNI": this.dni,
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
        };
        console.log(personaDetalle);
    };
    Persona.prototype.buscarDni = function (numerodeDni) {
        if (numerodeDni != this.dni) {
            throw new Error("El DNI no coincide");
        }
        else {
            return true;
        }
    };
    Persona.prototype.mostrarDatos = function (datos) {
        var dato = {};
        for (var i = 0; i < datos.length; i++) {
            if (datos[i].getDireccion) {
                dato[i] = datos[i].getTipo + ": " + datos[i].getDireccion;
            }
            else {
                dato[i] = datos[i].getTipo + ": " + datos[i].getNumero;
            }
        }
        return dato;
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map