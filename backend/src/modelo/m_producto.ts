import { QueryResult } from "pg";
import DriverPostgreSQL from "../driver/driver_postgresql"

class ModeloProducto extends DriverPostgreSQL{

    private id_producto:string;
    private nombre_producto:string;
    private estatus_producto:string;

    constructor(){
        super();
        this.id_producto="";
        this.nombre_producto="";
        this.estatus_producto="";
    }

    setDatos(producto:any):void{
        this.id_producto=producto.id_producto;
        this.nombre_producto=producto.nombre_producto;
        this.estatus_producto=producto.estatus_producto;
    }

    setIdproducto(id:string):void{
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




}

export default ModeloProducto