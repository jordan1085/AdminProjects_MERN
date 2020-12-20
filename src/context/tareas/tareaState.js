import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
    const initalState = {
        tareas: [],
    }

    // Crear el dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initalState);

    return (
        <TareaContext.Provider>
            


            {props.children}
        </TareaContext.Provider>
    )
};


export default TareaState;
