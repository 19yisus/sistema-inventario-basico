import {Router} from 'express'
import bodyParser from "body-parser"
import ControladorProducto from "../../../controlador/c_producto"
const router=Router()

router.use(bodyParser.json())

router.post("/registrar",ControladorProducto.registrar)
router.get("/consultar-todos",ControladorProducto.consultarTodos)
router.get("/consultar/:id",ControladorProducto.consultar)
router.put("/actualizar",ControladorProducto.actualizar)
router.get("/consultar-nombre-producto/:nombreProducto",ControladorProducto.consultarPorNombre)

export default router