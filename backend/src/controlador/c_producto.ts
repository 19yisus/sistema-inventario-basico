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
    },
    consultarTodos:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",datos:[],estado_respuesta:false,tipo_alerta:""}
        let Producto:ModeloProducto=new ModeloProducto()
        let resultProducto:QueryResult=await Producto.consultarTodos()
        if(resultProducto.rowCount>0){
            respuesta.datos=resultProducto.rows as Array<never>
            // respuesta.datos=<never>resultProducto.rows
            respuesta.mensaje="consulta completada"
            respuesta.estado_respuesta=true
            respuesta.tipo_alerta="success"
        }
        else{
            respuesta.mensaje="error al consultar no hay registro en la base de datos"
            respuesta.estado_respuesta=true
            respuesta.tipo_alerta="danger"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    
    },

    consultar:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",datos:[],estado_respuesta:false,tipo_alerta:""}
        let {id} = req.params
        let Producto:ModeloProducto=new ModeloProducto()
        Producto.setIdproducto(id)
        let resultProducto:QueryResult=await Producto.consultar()
        if(resultProducto.rowCount>0){
            respuesta.datos=resultProducto.rows as Array<never>
            // respuesta.datos=<never>resultProducto.rows
            respuesta.mensaje="consulta completada"
            respuesta.estado_respuesta=true
            respuesta.tipo_alerta="success"
        }
        else{
            respuesta.mensaje="error el elemento consultado no existe en la bas de datos"
            respuesta.estado_respuesta=true
            respuesta.tipo_alerta="danger"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    }

}

export default ControladorProducto