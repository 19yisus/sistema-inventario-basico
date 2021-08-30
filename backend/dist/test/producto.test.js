"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = require("./helpers/producto");
beforeAll(() => {
    producto_1.Producto.borrarDatos();
    producto_1.Producto.reiniciarSerialIndex();
});
describe("Test del modulo Producto", () => {
    test("registrando producto", () => __awaiter(void 0, void 0, void 0, function* () {
        let respuestas = [];
        for (let producto of producto_1.datosTest) {
            let respuesta = yield producto_1.api.post("/configuracion/producto/registrar")
                .send({ producto })
                .expect(200)
                .expect("Content-Type", /application\/json/);
            respuestas.push(respuesta.body);
        }
        expect(respuestas).toHaveLength(producto_1.datosTest.length);
    }));
    test("consultar todos los productos", () => __awaiter(void 0, void 0, void 0, function* () {
        let respuesta = yield producto_1.api.get("/configuracion/producto/consultar-todos")
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(respuesta.body.datos).toHaveLength(producto_1.datosTest.length);
    }));
    test("consultar registro especifico", () => __awaiter(void 0, void 0, void 0, function* () {
        let respuesta = yield producto_1.api.get(`/configuracion/producto/consultar/${producto_1.datosTest[0].id_producto}`)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(respuesta.body.datos).toHaveLength(1);
    }));
    test("actualizando registro", () => __awaiter(void 0, void 0, void 0, function* () {
        let producto = {
            id_producto: producto_1.datosTest[2].id_producto,
            nombre_producto: "nuevo producto",
            estatus_producto: "1"
        };
        let respuesta = yield producto_1.api.put(`/configuracion/producto/actualizar`)
            .send({ producto })
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(respuesta.body.idProducto).toBe(producto.id_producto);
    }));
    test("consultando producto por nombre", () => __awaiter(void 0, void 0, void 0, function* () {
        let nombreProducto = "nuevo";
        let respuesta = yield producto_1.api.get(`/configuracion/producto/consultar-nombre-producto/${nombreProducto}`)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(respuesta.body.datos).toHaveLength(1);
    }));
});
afterAll(() => {
    producto_1.servidor.close();
});
