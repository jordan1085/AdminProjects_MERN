import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';



// State inicial de la administracion de proyectos
const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño de Sitio web'}
    ]
    
    // state inicial
    const initialState = {

        proyectos : [],
        formulario : false
    }

    // Dispath para ejecutar las acciones (types)
    const [state, dispatch] = useReducer(proyectoReducer, initialState);


    // Series de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos 
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    
    return (
        // Creamos provider y exportamos a app
        <proyectoContext.Provider
            value={{
                //State
                proyectos: state.proyectos,
                formulario: state.formulario,

                // Funciones 
                mostrarFormulario,
                obtenerProyectos
                

            }}

        >
             
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;