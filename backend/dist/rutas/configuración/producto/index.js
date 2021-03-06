"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const c_producto_1 = __importDefault(require("../../../controlador/c_producto"));
const router = express_1.Router();
router.use(body_parser_1.default.json());
router.post("/registrar", c_producto_1.default.registrar);
router.get("/consultar-todos", c_producto_1.default.consultarTodos);
router.get("/consultar/:id", c_producto_1.default.consultar);
router.put("/actualizar", c_producto_1.default.actualizar);
router.get("/consultar-nombre-producto/:nombreProducto", c_producto_1.default.consultarPorNombre);
exports.default = router;
