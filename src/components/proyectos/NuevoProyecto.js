import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

// Creacion de componente con hooks
const NuevoProyecto = () => {

    // Obtener el estade del formulario
    const proyectosCotext = useContext(proyectoContext); 
    const { formulario, mostrarFormulario } = proyectosCotext;

    // HookState de proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    // Extraer nombre proyecto
    const {nombre} = proyecto;

    // Lee los contenidos del imput
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto, [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar proyecto

        // Agregarlo al state

        // Reiniciar el form 
    } 

    // Mostrar fomulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 

        <Fragment>

            <button

                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}

            >Nuevo Proyecto</button>

            {
                formulario
                ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />

                    </form>
                ) : null

            }


        </Fragment>
     );
}
 
export default NuevoProyecto;