import { useUsuario } from '../hook/useUsuario';
import BotonLogout from './BotonLogout';

const UsuarioNav = () => {

    const { usuario } = useUsuario();

    if (!usuario) return null;

    return (
        <>
            <div className="d-flex align-items-center gap-2">
                <span className="text-light">Bienvenido, {usuario.usuario}</span>
                <BotonLogout />
            </div>
            
        </>
    );
};

export default UsuarioNav;