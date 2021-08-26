import {app,servidor} from "../index"
import superTest from "supertest"

const api=superTest(app)

describe("Test del modulo Producto", () => {
    // test('registrar producto',async () => {
//     api
//     .post("/")
// })

    test('consultar todos los producto',async () => {
        await api
        .get("/configuracion/producto/consultar-todos")
        .expect(200)
        .expect("Content-Type",/application\/json/)
    })
})

afterAll(() => {
    servidor.close()
})