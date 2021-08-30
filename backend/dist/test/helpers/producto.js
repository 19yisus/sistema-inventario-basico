"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosTest = exports.Producto = exports.servidor = exports.api = void 0;
const index_1 = require("../../index");
Object.defineProperty(exports, "servidor", { enumerable: true, get: function () { return index_1.servidor; } });
const m_producto_1 = __importDefault(require("../../modelo/m_producto"));
const supertest_1 = __importDefault(require("supertest"));
let Producto = new m_producto_1.default();
exports.Producto = Producto;
const api = supertest_1.default(index_1.app);
exports.api = api;
let datosTest = [
    {
        id_producto: 1,
        nombre_producto: "resina concentrada",
        estatus_producto: "1",
    },
    {
        id_producto: 2,
        nombre_producto: "protegemas",
        estatus_producto: "1",
    },
    {
        id_producto: 3,
        nombre_producto: "deseos entrelasados",
        estatus_producto: "1",
    }
];
exports.datosTest = datosTest;
