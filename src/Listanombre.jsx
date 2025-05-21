import React, { useState } from "react";
import InputNombre from "./componentes/InputNombre.jsx";
import Completado from "./componentes/Completado.jsx";
import Eliminar from "./componentes/Eliminar.jsx";

const Listanombres = ({ setCount}) => {

    const [nombres, setNombres] = useState([]);
    const [completados, setCompletados] = useState([]);


    const guardar = (nuevoNombre) => {
        console.log(nuevoNombre);
        setNombres([...nombres, nuevoNombre]);
        setCount(prevCount => prevCount + 1);
    }
    const toggleCompletado = (index) => {
        setCompletados((prev) =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const eliminarTarea = (index) => {
        setNombres(nombres.filter((_, i) => i !== index));
        setCount(prevCount => prevCount - 1);
    };


    return (
        <div>
            <InputNombre guardar = {guardar}/>
            <ul>
                {nombres.map((elemento, index) => (
                  <div className= "acciones">
                        <li key={index} style={{ display: "flex", gap: "0.5rem"}}>
                            <Completado
                                key={index}
                                elemento={elemento}
                                index={index}
                                completado={completados.includes(index)}
                                toggleCompletado={toggleCompletado}
                            />
                                <Eliminar onEliminar={() => eliminarTarea(index)} />
                        </li>
                    </div>
                ))}
            </ul>

        </div>
    )
};

export default Listanombres;