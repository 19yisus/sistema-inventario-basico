import {Router} from 'express'
import bodyParser from "body-parser"
import ControladorProducto from "../../../controlador/c_producto"
const router=Router()

router.use(bodyParser.json())

router.post("/registrar",ControladorProducto.registrar)
router.get("/consultar-todos",ControladorProducto.consultarTodos)
router.get("/consultar/:id",ControladorProducto.consultar)
// router.put()
// router.get()

export default router