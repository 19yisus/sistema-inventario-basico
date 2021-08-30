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
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    },

    consultarPorNombre:async (req:Request,res:Response) => {
        const respuesta={mensaje:"",datos:[],estadoRespuesta:false,tipoAlerta:""}
        let {nombreProducto} = req.params
        let Producto:ModeloProducto=new ModeloProducto()
        let resultProducto:QueryResult= await Producto.consultarPorNombre(nombreProducto)
        if(resultProducto.rowCount>0){
            respuesta.datos=resultProducto.rows as Array<never>
            respuesta.mensaje=`se a encontrado un total de ${resultProducto.rowCount} ${(resultProducto.rowCount===1)?"producto":"productos"} que coinciden con lo buscado`
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="success"
        }
        else{
            respuesta.mensaje=`numero de resultado 0 (no se a encontrado ningun producto con este nombre =>>> ${nombreProducto})`
            respuesta.estadoRespuesta=true
            respuesta.tipoAlerta="info"
        }
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(respuesta))
        res.end()
    } 

}

export default ControladorProducto