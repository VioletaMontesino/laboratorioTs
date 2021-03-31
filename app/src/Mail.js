"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Object.defineProperty(Mail.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "getDireccion", {
        get: function () {
            return this.direccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "setTipo", {
        set: function (value) {
            this.tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "setDireccion", {
        set: function (value) {
            this.direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
//# sourceMappingURL=Mail.js.map