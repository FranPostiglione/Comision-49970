import { useState } from "react"
import Boton from "./Boton"
import Section from "./section"


const CompContenedor = () => {
    const [marca, setMarca] = useState("Marcas de remeras")

    function modificarRemeras() {
        
        setMarca("No hay remeras disponible en este momento");
    
    }
    return (
        <>
        <Section section={marca} />
        <Boton accion={modificarRemeras} />
        <h2>{marca}</h2>
        </>
        

    )


}

export default CompContenedor;