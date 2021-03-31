"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "getNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "setTipo", {
        set: function (value) {
            this.tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "setNumero", {
        set: function (value) {
            this.numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
//# sourceMappingURL=Telefono.js.map