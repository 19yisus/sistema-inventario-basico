import {Request,Response} from "express"
import { QueryResult } from "pg"
import ModeloProducto from "../modelo/m_producto"

const ControladorProducto={

    registrar:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",idRegistroProducto:null,estado_respuesta:false,tipo_alerta:""}
        let {producto}=req.body
        let Producto:ModeloProducto=new ModeloProducto()
        Producto.setDatos(producto)
        let resultProducto:QueryResult=await Producto.registrar()
        // console.log(resultProducto.rowCount)
        // console.log(resultProducto)
        if(resultProducto.rowCount>0){
            respuesta.mensaje="registro completado"
            respuesta.estado_respuesta=true
            respuesta.tipo_alerta="success"
            respuesta.idRegistroProducto=resultProducto.rows[0].id_producto
        }
        else{
            respuesta.mensaje="error al registrar"
            respuesta.estado_respuesta=true
            respuesta.tipo_alerta="danger"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    }

}

export default ControladorProducto