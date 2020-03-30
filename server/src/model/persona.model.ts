import { Connection } from "./connection";
import { PoolConnection, Pool } from "mysql2/promise";
import { RowDataPacket, Field, FieldPacket, format } from "mysql2";

export class PersonaModel {
  idpersona?: number | null
  nombre: string
  apellido: string
  direccion: string
  telefono: string
  celular: string
  fechaNacimiento: string
  hasCoronavirus: string
  hasSintomas: string

  constructor(idpersona: number | null, nombre: string, apellido: string, direccion: string, telefono: string, celular: string, fechaNacimiento: string, hasCoronavirus: string, hasSintomas: string) {
    this.idpersona = idpersona;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.celular = celular;
    this.fechaNacimiento = fechaNacimiento;
    this.hasCoronavirus = hasCoronavirus;
    this.hasSintomas = hasSintomas;
  }

  static async getPersonas() {
    let pool: Pool = Connection.getPool();
    let conn: PoolConnection = await pool.getConnection();
    let [rows,]: [RowDataPacket[], FieldPacket[]] = await conn.query('SELECT * FROM diego.persona order by idpersona desc;')
    console.log('con.threadId', conn.threadId, pool.getMaxListeners())
    conn.release();
    return rows;
  }

  static async save(persona: any) {
    let pool: Pool = Connection.getPool();
    let conn: PoolConnection = await pool.getConnection();
    let data = await conn.query('INSERT INTO diego.persona SET ? ', persona)
    conn.release();
    return data;
  }
  static async getByID(id: number) {
    
    let pool: Pool = Connection.getPool();
    let conn: PoolConnection = await pool.getConnection();
    if(isNaN(id)){
      throw "id no es un entero";
      
    }
    let [row,] = await conn.query('SELECT * FROM diego.persona where idpersona = ?', [id])
    conn.release();
    return row;
  }
  static async update(persona: PersonaModel, id: number) {
    let pool: Pool = Connection.getPool();
    let conn: PoolConnection = await pool.getConnection();

    let query = " UPDATE diego.persona SET nombre = '" + persona.nombre + "', " +
      " apellido =  '" + persona.apellido + "', " +
      " direccion = '" + persona.direccion + "', " +
      " telefono = '" + persona.telefono + "', " +
      " celular = '" + persona.celular + "', " +
      " fechaNacimiento = '" + persona.fechaNacimiento + "', " +
      " hasCoronavirus = '" + persona.hasCoronavirus + "', " +
      " hasSintomas = '" + persona.hasSintomas + "' WHERE (idpersona = " + id + ")"

    let data = conn.query(query, persona)
    conn.release();
    return data;
  }

  static async  delete(id: number) {
    let pool: Pool = Connection.getPool();
    let conn: PoolConnection = await pool.getConnection();
    return conn.query('delete from diego.persona where idpersona = ?', [id])
  }

}

