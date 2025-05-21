import React from 'react';

const Completado = ({ elemento, index, completado, toggleCompletado }) => (
    <>
        <span style={{ textDecoration: completado ? 'line-through' : 'none', flex: 1 }}>
            {elemento}
        </span>
        <button onClick={() => toggleCompletado(index)}>
            {completado ? 'Desmarcar' : 'Completado'}
        </button>
    </>
);

export default Completado;