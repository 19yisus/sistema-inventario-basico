import express from 'express'
import logger from 'morgan'
import cors from 'cors'

const app=express()

app.set("puerto",8080)
// import modulos
import moduloProducto from './rutas/configuración/producto'
app.use("/configuracion/producto",moduloProducto)

app.use(logger("dev"))
.use(cors())

export default app