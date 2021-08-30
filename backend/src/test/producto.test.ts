import { Response } from 'supertest'
import InterfaceProducto from '../interfaces/producto'
import {api,servidor,Producto,datosTest} from './helpers/producto'

beforeAll(() => {
    Producto.borrarDatos()
    Producto.reiniciarSerialIndex()
})

describe("Test del modulo Producto", () => {

    test("registrando producto",async () => {
        let respuestas:Array<Response>=[]
        for(let producto of datosTest){
            let respuesta:Response=await api.post("/configuracion/producto/registrar")
            .send({producto})
            .expect(200)
            .expect("Content-Type", /application\/json/)
            respuestas.push(respuesta.body)
        }
        expect(respuestas).toHaveLength(datosTest.length)
    })

    test("consultar todos los productos",async () => {
        let respuesta:Response=await api.get("/configuracion/producto/consultar-todos")
        .expect(200)
        .expect("Content-Type",/application\/json/)
        expect(respuesta.body.datos).toHaveLength(datosTest.length)
    })

    test("consultar registro especifico",async () => {
        let respuesta:Response =await api.get(`/configuracion/producto/consultar/${datosTest[0].id_producto}`)
        .expect(200)
        .expect("Content-Type",/application\/json/)
        expect(respuesta.body.datos).toHaveLength(1)
    })

    test("actualizando registro",async () => {
        let producto={
            id_producto:datosTest[2].id_producto,
            nombre_producto:"nuevo producto",
            estatus_producto:"1"
        }
        let respuesta:Response=await api.put(`/configuracion/producto/actualizar`)
        .send({producto})
        .expect(200)
        .expect("Content-Type",/application\/json/)
        expect(respuesta.body.idProducto).toBe(producto.id_producto)
    })

    test("consultando producto por nombre",async () => {
        let nombreProducto="nuevo"
        let respuesta:Response=await api.get(`/configuracion/producto/consultar-nombre-producto/${nombreProducto}`)
        .expect(200)
        .expect("Content-Type",/application\/json/)
        expect(respuesta.body.datos).toHaveLength(1)
    })
    

})

afterAll(() => {
    servidor.close()
})