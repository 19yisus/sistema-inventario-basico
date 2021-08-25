import {Request,Response} from "express"
import { QueryResult } from "pg"
import ModeloProducto from "../modelo/m_producto"

const ControladorProducto={

    registrar:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",idProducto:null,estadoRespuesta:false,tipoAlerta:""}
        let {producto}=req.body
        let Producto:ModeloProducto=new ModeloProducto()
        Producto.setDatos(producto)
        let resultProducto:QueryResult=await Producto.registrar()
        // console.log(resultProducto.rowCount)
        // console.log(resultProducto)
        if(resultProducto.rowCount>0){
            respuesta.mensaje="registro completado"
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="success"
            respuesta.idProducto=resultProducto.rows[0].id_producto
        }
        else{
            respuesta.mensaje="error al registrar"
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="danger"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    },
    consultarTodos:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",datos:[],estadoRespuesta:false,tipoAlerta:""}
        let Producto:ModeloProducto=new ModeloProducto()
        let resultProducto:QueryResult=await Producto.consultarTodos()
        if(resultProducto.rowCount>0){
            respuesta.datos=resultProducto.rows as Array<never>
            // respuesta.datos=<never>resultProducto.rows
            respuesta.mensaje="consulta completada"
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="success"
        }
        else{
            respuesta.mensaje="error al consultar no hay registro en la base de datos"
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="warning"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    
    },

    consultar:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",datos:[],estadoRespuesta:false,tipoAlerta:""}
        let {id} = req.params
        let Producto:ModeloProducto=new ModeloProducto()
        Producto.setIdproducto(id)
        let resultProducto:QueryResult=await Producto.consultar()
        if(resultProducto.rowCount>0){
            respuesta.datos=resultProducto.rows as Array<never>
            // respuesta.datos=<never>resultProducto.rows
            respuesta.mensaje="consulta completada"
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="success"
        }
        else{
            respuesta.mensaje="error el elemento consultado no existe en la base de datos"
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="danger"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    },

    actualizar:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",idProducto:null,estadoRespuesta:false,tipoAlerta:""}
        let {producto} = req.body
        let {id} = req.params
        if(producto.id_producto===id){
            let Producto:ModeloProducto=new ModeloProducto()
            Producto.setDatos(producto)
            let resultProducto:QueryResult= await Producto.actualizar()
            if(resultProducto.rowCount>0){
                respuesta.mensaje="actualizacion completada"
                respuesta.estadoRespuesta=true
                respuesta.tipoAlerta="success"
                respuesta.idProducto=resultProducto.rows[0].id_producto
            }
            else{
                respuesta.mensaje="error al actualizar por que el elemento no existe en la base de datos"
                respuesta.estadoRespuesta=true
                respuesta.tipoAlerta="warning"
            }
        }
        else{
            respuesta.mensaje="error al actualizar el codigo del recuros que quiere actualizar no coincide con el codigo que esta enviando "
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="warning"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    }

}

export default ControladorProducto