//Importamos restos de ficheros.

import { Persona } from './app/src/Persona';
import { Direccion } from './app/src/Direccion';
import { Telefono } from './app/src/Telefono';
import { Mail } from './app/src/Mail';

// Declarar varias direcciones, teléfonos y emails

let direcciones:Direccion[] = [
    new Direccion("Pez",11,3,"B",28022,"Madrid","Madrid"),
    new Direccion("Lua",2,6,"C",23038,"Ampudia","Palecia"),
    new Direccion("Mayor",4,9,"A",27035,"Salou","Tarragona")
]

let izanTelefonos:Telefono[] = [
    new Telefono("Móvil",622145789),
    new Telefono("Fijo",912145789)
]

let lucasTelefonos:Telefono[] = [
    new Telefono("Móvil",633529456),
    new Telefono("Fijo",973529456)
]

let anaTelefonos:Telefono[] = [
    new Telefono("Móvil",644529456),
    new Telefono("Fijo",933529456)
]

let izanMails:Mail[] = [
    new Mail("Personal","izan@casa.es"),
    new Mail("Laboral","izanlab@trabajo.net")
]
let lucasMails:Mail[] = [
    new Mail("Personal","lucas@casa.es"),
    new Mail("Laboral","lucaslab@trabajo.net")
]
let anaMails:Mail[] = [
    new Mail("Personal","ana@casa.es"),
    new Mail("Laboral","analab@trabajo.net")
]



// Declarar un Array de Persona

let izan:Persona = new Persona("Izan", "Rios González",24,"53049385A","25/10/1979","Rojo","T",direcciones[0],izanMails,izanTelefonos,"Soy Izan");
let lucas:Persona = new Persona("Lucas","Barroso del Pino",52,"12345755A","23/08/1977","Rosa","H",direcciones[1],lucasMails,lucasTelefonos,"Soy Lucas");
let ana:Persona = new Persona("Ana","Pérez Pazos", 16,"15986435G","01/08/1996","Negro","M",direcciones[2],anaMails,anaTelefonos,"Soy Ana");

let personas:Persona[]= [izan, lucas, ana];

// Imprimir una persona

personas[1].imprimirPersona();

//Buscar por DNI y cambiar parámetro

console.log("El parámetro original era: " +  ana.getColorFavorito);

let nombre = personas[2];

if (nombre.buscarDni("15986435G")) {
    nombre.setColorFavorito = "Azul"
}

console.log("El nuevo parámetro es: " + ana.getColorFavorito);