import {Server} from "http"
import app from "./app"

const servidor:Server=app.listen(app.get("puerto"),() => {
    console.log(`ejecutando servidor en el puerto =>>> ${app.get("puerto")}`)
})

export {app, servidor}