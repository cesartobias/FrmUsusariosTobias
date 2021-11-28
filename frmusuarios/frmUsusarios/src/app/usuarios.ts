import { KeyPairSyncResult } from "crypto";

export class Usuarios {

    constructor(
      public id: number,
      public name: string,
      public password: string,
      public oficina:string,
      public pais:string,
      public comentarios:string,
      public departamento: string,
       ) {  }
    }