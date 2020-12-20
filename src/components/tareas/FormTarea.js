import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { useContext } from 'react';

const FormTarea = () => {

  // Extraer si un proyecto esta activo
  const proyectosCotext = useContext(proyectoContext); 
  const { proyecto } = proyectosCotext; 

  //si no hay proyecto seleccionado
  if(!proyecto) return null;

  // Array destructuring para eextraer proyecto actual
  const [proyectoActual] = proyecto;

  return (

      <div className="formulario">
          <form>

              <div className="contenedor-input">
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Nombre Tarea..."
                      name="nombre"
                    />
              </div>

              <div className="contenedor-input">
                    <input
                      type="submit"
                      className="btn btn-primario btn-block"
                      value="Agregar Tarea"
                    />
              </div>

          </form>
      </div> 

    );
}
 
export default FormTarea;