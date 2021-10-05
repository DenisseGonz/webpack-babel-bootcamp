"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludo = exports.suma = void 0;

var suma = function suma(num1, num2) {
  return num1 + num2;
};

exports.suma = suma;

var resta = function resta(num1, num2) {
  return num1 - num2;
};

var multi = function multi(num1, num2) {
  return num1 * num2;
};

var saludo = 'Hola, soy Denisse, mucho gusto y saludos desde un módulo';
exports.saludo = saludo;