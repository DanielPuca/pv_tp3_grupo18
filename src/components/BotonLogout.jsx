
import { useUsuario } from '../hook/useUsuario';

const BotonLogout = () =>{

    const { cerrarSesion } = useUsuario();

    return(
        <button onClick={cerrarSesion}>
            Cerrar Sesion
        </button>
    );

};

export default BotonLogout;