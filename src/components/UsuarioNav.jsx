import { useUsuario } from '../hook/useUsuario';
import BotonLogout from './BotonLogout';

const UsuarioNav = () => {

    const { usuario } = useUsuario();

    if (!usuario) return null;

    return (
        <>
            <span>Bienvenido, {usuario.usuario}</span>
            <BotonLogout />
        </>
    );
};

export default UsuarioNav;