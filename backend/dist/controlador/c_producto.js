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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const m_producto_1 = __importDefault(require("../modelo/m_producto"));
const ControladorProducto = {
    registrar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const respuesta = { mensaje: "", idRegistroProducto: null, estado_respuesta: false, tipo_alerta: "" };
        let { producto } = req.body;
        let Producto = new m_producto_1.default();
        Producto.setDatos(producto);
        let resultProducto = yield Producto.registrar();
        if (resultProducto.rowCount > 0) {
            respuesta.mensaje = "registro completado";
            respuesta.estado_respuesta = true;
            respuesta.tipo_alerta = "success";
            respuesta.idRegistroProducto = resultProducto.rows[0].id_producto;
        }
        else {
            respuesta.mensaje = "error al registrar";
            respuesta.estado_respuesta = true;
            respuesta.tipo_alerta = "danger";
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(respuesta));
        res.end();
    })
};
exports.default = ControladorProducto;
