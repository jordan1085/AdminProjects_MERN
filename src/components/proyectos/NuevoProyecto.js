import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

// Creacion de componente con hooks
const NuevoProyecto = () => {


    // obtener el state a traves del context
    const proyectosCotext = useContext(proyectoContext); 

    // Importamos el formulario que pasamos en provider
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosCotext;

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
        if(nombre === '') {
            return;
        }

        // Agregarlo al state
        agregarProyecto(proyecto);

        // Reiniciar el form 
        guardarProyecto({
            nombre: ''
        });
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

            { formulario ?
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