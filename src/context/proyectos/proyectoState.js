import React, { useReducer } from 'react';
import uuid from 'uuid/dist/v4';
import proyectoContext from './proyectoContext'; // Importamos el cotext para utilizar el provider
import proyectoReducer from './proyectoReducer'; // Importamos el state del reducer

// Importamos los types que definen una funcion
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO } from '../../types';



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
        formulario : false, // crear funcionalidad que oculte el formulario del aside
        errorFormulario : false 
    }

    // Usamos array destructuring para extaer el stade(useSelector en redux) y el dispatch (para ejecutar las funciones en el reducer que cambiaran el stade)
    const [state, dispatch] = useReducer(proyectoReducer, initialState); // Reducer y stade inicial


    // Dispara la ejecucion del case(FORMULARIO_PROYECTO) en el switch del Reducer
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
};

    // Obtener los proyectos 
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    };
    
    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();

        // Insertar proyecto en el stade
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
        
    };

    // Valida el formulario para agregar nuavos proyectos
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return (
        // CONTEXT.provider
        // Hay que consumirlo en el componente padre
        <proyectoContext.Provider
            value={{
                //State
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,

                // Funciones 
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError

            }}  
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;