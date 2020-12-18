import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // Definir nuestro State
    const [usuarioNuevo, guardarUsuarioNuevo] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const {nombre, email, password, confirmar} = usuarioNuevo;

    // como es un evento que se ejecuta en cada input, agregara el name y value de cada uno de ellos al objeto 
    const onChange = e => {
        guardarUsuarioNuevo({
            ...usuarioNuevo, [e.target.name] : e.target.value
        })
    };

    // Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no existan campos vacios


        // Validar pasword minimo de 6 caracteres

        // Validar que password y confirmar sean iguales

        // Pasarlo al action (Funcion que vamos definir en nuestro reducer)

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre usuario</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre" //leer para colocarlo en el state
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email" //leer para colocarlo en el state
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>

            </div>
        </div>
     );
}
 
export default NuevaCuenta;