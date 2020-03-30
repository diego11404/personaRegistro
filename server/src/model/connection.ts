import { config } from "./config";
import { createPool, Pool } from "mysql2/promise";

export class Connection {

  static contador: number = 0

  static getPool(): Pool {
    this.contador += 1;
    console.log(this.contador)
    return createPool(config)
  }

}