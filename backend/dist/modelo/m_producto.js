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
const driver_postgresql_1 = __importDefault(require("../driver/driver_postgresql"));
class ModeloProducto extends driver_postgresql_1.default {
    constructor() {
        super();
        this.id_producto = "";
        this.nombre_producto = "";
        this.estatus_producto = "";
    }
    setDatos(producto) {
        this.id_producto = producto.id_producto;
        this.nombre_producto = producto.nombre_producto;
        this.estatus_producto = producto.estatus_producto;
    }
    setIdproducto(id) {
        this.id_producto = id;
    }
    registrar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `INSERT INTO tproducto
        (
            nombre_producto,
            estatus_producto
        ) VALUES(
            '${this.nombre_producto}',
            '${this.estatus_producto}'
        ) RETURNING id_producto`;
            return yield this.query(SQL);
        });
    }
    consultarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tproducto`;
            return yield this.query(SQL);
        });
    }
    consultar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `SELECT * FROM tproducto WHERE id_producto=${this.id_producto};`;
            return yield this.query(SQL);
        });
    }
    actualizar() {
        return __awaiter(this, void 0, void 0, function* () {
            const SQL = `UPDATE tproducto SET
        nombre_producto='${this.nombre_producto}',
        estatus_producto='${this.estatus_producto}'
        WHERE
        id_producto=${this.id_producto} RETURNING id_producto;
        `;
            return yield this.query(SQL);
        });
    }
}
exports.default = ModeloProducto;
