// Contiene las funciones que van a interactuar con el state
// Reducer cambia el state

import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types';


export default (state, action) => {

    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyecto: action.payload
            }
        default:
            return state;
    }
}