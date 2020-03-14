"use strict"
let connection = require('./connection')

class PersonaModel {

  static getPersonas() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM diego.persona;', function (error, results, fields) {
        if (error) throw error;

        resolve(results)
      });
    })
  }
  static getPersona(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM diego.persona where idpersona = ?', [id], function (error, results, fields) {
        if (error) throw error;
        resolve(results)
      });
    })
  }

  static UpdatePersona(id,persona) {
    return new Promise((resolve, reject) => {
      let query = " UPDATE diego.persona SET nombre = '"+ persona.nombre+"', "  +
        " apellido =  '"+persona.apellido+"', " +
        " direccion = '"+persona.direccion+"', "  +
        " telefono = '"+persona.telefono+"', " +
        " celular = '"+persona.celular+"', " +
        " fechaNacimiento = '"+persona.fechaNacimiento+"', " +
        " hasCoronavirus = '"+persona.hasCoronavirus + "', " +
        " hasSintomas = '"+persona.hasSintomas+"' WHERE (idpersona = "+id+")" 
      connection.query(query, function (error, results, fields) {
        if (error) throw error;

        resolve(results)
      });
    })
  }

  static createPersona(persona) {
    return new Promise((resolve, reject) => {
      let query = 'INSERT INTO diego.persona SET ? '
      connection.query(query,persona, function (error, results, fields) {
        if (error) throw error;

        resolve(results)
      });
    })
  }

  static deletePersona (id) {
    return new Promise((resolve, reject) => {
      let query = 'delete from diego.persona where idpersona = ? '
      connection.query(query, +id, function (error, results, fields) {
        if (error) throw error;

        resolve(results)
      });
    })
  }

}

module.exports = PersonaModel




