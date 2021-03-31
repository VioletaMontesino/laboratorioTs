"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "getCalle", {
        get: function () {
            return this.calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "getNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "getPiso", {
        get: function () {
            return this.piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "getLetra", {
        get: function () {
            return this.letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "getCodigoPostal", {
        get: function () {
            return this.codigoPostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "getPoblacion", {
        get: function () {
            return this.poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "getProvincia", {
        get: function () {
            return this.provincia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setCalle", {
        set: function (value) {
            this.calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setNumero", {
        set: function (value) {
            this.numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setPiso", {
        set: function (value) {
            this.piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setLetra", {
        set: function (value) {
            this.letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setCodigoPostal", {
        set: function (value) {
            this.codigoPostal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setPoblacion", {
        set: function (value) {
            this.poblacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setProvincia", {
        set: function (value) {
            this.provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
//# sourceMappingURL=Direccion.js.map