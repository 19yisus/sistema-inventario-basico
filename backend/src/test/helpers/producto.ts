
import {app,servidor} from "../../index"
import ModeloProducto from "../../modelo/m_producto"
import superTest from "supertest"
import InterfaceProducto from '../../interfaces/producto'

let Producto:ModeloProducto=new ModeloProducto()

const api=superTest(app)

let datosTest:Array<InterfaceProducto>=[
    {
        id_producto:1,
        nombre_producto:"resina concentrada",
        estatus_producto:"1",
    },
    {
        id_producto:2,
        nombre_producto:"protegemas",
        estatus_producto:"1",
    },
    {
        id_producto:3,
        nombre_producto:"deseos entrelasados",
        estatus_producto:"1",
    }
]

export {
    api,
    servidor,
    Producto,
    datosTest
}