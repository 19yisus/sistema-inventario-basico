import {Router} from 'express'
import bodyParser from "body-parser"
import ControladorProducto from "../../../controlador/c_producto"
const router=Router()

router.use(bodyParser.json())

router.post("/registrar",ControladorProducto.registrar)
// router.get()
// router.put()
// router.get()

export default router