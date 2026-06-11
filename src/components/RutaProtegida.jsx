import { Navigate } from 'react-router-dom';
import { useUsuario } from '../hook/useUsuario';

const RutaProtegida = ({ children }) => {
    const { usuario } = useUsuario();

    if (!usuario) return <Navigate to="/" replace />;

    return children;
};

export default RutaProtegida;