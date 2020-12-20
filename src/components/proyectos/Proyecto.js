import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {

    // obtener el state a traves del context
    const proyectosCotext = useContext(proyectoContext); 

    // Importamos el formulario que pasamos en provider
    const { proyectoActual } = proyectosCotext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => proyectoActual(proyecto.id) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;