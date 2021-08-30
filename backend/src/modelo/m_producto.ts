import { QueryResult } from "pg";
import DriverPostgreSQL from "../driver/driver_postgresql"

class ModeloProducto extends DriverPostgreSQL{

    private id_producto:number;
    private nombre_producto:string;
    private estatus_producto:string;

    constructor(){
        super();
        this.id_producto=0;
        this.nombre_producto="";
        this.estatus_producto="";
    }

    setDatos(producto:any):void{
        this.id_producto=producto.id_producto;
        this.nombre_producto=producto.nombre_producto;
        this.estatus_producto=producto.estatus_producto;
    }

    setIdproducto(id:any):void{
        this.id_producto=id
    }

    async registrar():Promise<QueryResult>{
        const SQL:string=`INSERT INTO tproducto
        (
            nombre_producto,
            estatus_producto
        ) VALUES(
            '${this.nombre_producto}',
            '${this.estatus_producto}'
        ) RETURNING id_producto`;
        return await this.query(SQL);
    }

    async consultarTodos():Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tproducto`;
        return await this.query(SQL)
    }

    async consultar():Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tproducto WHERE id_producto=${this.id_producto};`
        return await this.query(SQL)
    }

    async actualizar():Promise<QueryResult>{
        const SQL:string=`UPDATE tproducto SET
        nombre_producto='${this.nombre_producto}',
        estatus_producto='${this.estatus_producto}'
        WHERE
        id_producto=${this.id_producto} RETURNING id_producto;
        `
        return await this.query(SQL)
    }

    async consultarPorNombre(nombreProducto:string):Promise<QueryResult>{
        const SQL:string=`SELECT * FROM tproducto WHERE nombre_producto LIKE '%${nombreProducto}%' ;`
        return await this.query(SQL)
    }

    async borrarDatos():Promise<QueryResult>{
        const SQL:string=`DELETE FROM tproducto;`
        return await this.query(SQL)
    }

    async reiniciarSerialIndex():Promise<QueryResult>{
        const SQL:string=`ALTER SEQUENCE tproducto_id_producto_seq RESTART WITH 1`
        return await this.query(SQL)
    }

}

export default ModeloProducto