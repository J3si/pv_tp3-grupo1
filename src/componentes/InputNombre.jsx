import React, {useState} from 'react';


const InputNombre = ({guardar}) => {

        const [nombre, setNombre] = useState(' ');

        const ManejarEnvio = () => {
            guardar(nombre); //llama a la funcion guardar
            setNombre('');
        };

        return (
            <div className ="input-selection">
                <label htmlFor=" ">  Lista de tareas  </label><br/>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <button onClick={ManejarEnvio}> Enviar </button>
            </div>
        );
};





export default InputNombre;