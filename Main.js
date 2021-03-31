"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./app/src/Persona");
var Direccion_1 = require("./app/src/Direccion");
var Telefono_1 = require("./app/src/Telefono");
var Mail_1 = require("./app/src/Mail");
var direcciones = [
    new Direccion_1.Direccion("Pez", 11, 3, "B", 28022, "Madrid", "Madrid"),
    new Direccion_1.Direccion("Lua", 2, 6, "C", 23038, "Ampudia", "Palecia"),
    new Direccion_1.Direccion("Mayor", 4, 9, "A", 27035, "Salou", "Tarragona")
];
var izanTelefonos = [
    new Telefono_1.Telefono("Móvil", 622145789),
    new Telefono_1.Telefono("Fijo", 912145789)
];
var lucasTelefonos = [
    new Telefono_1.Telefono("Móvil", 633529456),
    new Telefono_1.Telefono("Fijo", 973529456)
];
var anaTelefonos = [
    new Telefono_1.Telefono("Móvil", 644529456),
    new Telefono_1.Telefono("Fijo", 933529456)
];
var izanMails = [
    new Mail_1.Mail("Personal", "izan@casa.es"),
    new Mail_1.Mail("Laboral", "izanlab@trabajo.net")
];
var lucasMails = [
    new Mail_1.Mail("Personal", "lucas@casa.es"),
    new Mail_1.Mail("Laboral", "lucaslab@trabajo.net")
];
var anaMails = [
    new Mail_1.Mail("Personal", "ana@casa.es"),
    new Mail_1.Mail("Laboral", "analab@trabajo.net")
];
var izan = new Persona_1.Persona("Izan", "Rios González", 24, "53049385A", "25/10/1979", "Rojo", "T", direcciones[0], izanMails, izanTelefonos, "Soy Izan");
var lucas = new Persona_1.Persona("Lucas", "Barroso del Pino", 52, "12345755A", "23/08/1977", "Rosa", "H", direcciones[1], lucasMails, lucasTelefonos, "Soy Lucas");
var ana = new Persona_1.Persona("Ana", "Pérez Pazos", 16, "15986435G", "01/08/1996", "Negro", "M", direcciones[2], anaMails, anaTelefonos, "Soy Ana");
var personas = [izan, lucas, ana];
personas[1].imprimirPersona();
console.log("El parámetro original era: " + ana.getColorFavorito);
var nombre = personas[2];
if (nombre.buscarDni("15986435G")) {
    nombre.setColorFavorito = "Azul";
}
console.log("El nuevo parámetro es: " + ana.getColorFavorito);
//# sourceMappingURL=Main.js.map