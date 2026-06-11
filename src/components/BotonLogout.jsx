
import { useUsuario } from '../hook/useUsuario';

const BotonLogout = () =>{

    const { cerrarSesion } = useUsuario();

    return(
        <button className="btn btn-outline-light btn-sm" onClick={cerrarSesion}>
            Cerrar Sesión
        </button>
    );

};

export default BotonLogout;