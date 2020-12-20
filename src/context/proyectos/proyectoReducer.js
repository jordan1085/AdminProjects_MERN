// Contiene las funciones que van a interactuar con el state
// Reducer cambia el state

import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO } from '../../types';


export default (state, action) => {

    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true // Cambia el state de formulario para mostrarlo cuando el usuario hace click
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        default:
            return state;
    }
} 