import React, { useState } from 'react';

const CardContainer = ({ children }) => {
    const [layout, setLayout] = useState('row'); // el layout es el modo de organización de los elementos en el contenedor

    const changeLayout = () => {
        setLayout(layout === 'row' ? 'column' : 'row');
    }
    return (
        <>
        <div>
      <select value={layout} onChange={changeLayout}> 
        <option value="row">Filas</option>
        <option value="column">Columnas</option>
      </select>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: layout, // Cambia entre 'row' y 'column' según el estado
            gap: '1rem',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
          }}>
            {children}
          </div>
        </>
    );
};

export default CardContainer;