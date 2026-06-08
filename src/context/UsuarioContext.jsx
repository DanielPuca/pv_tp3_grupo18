import { createContext, useState } from 'react';

export const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(null);

    const guardarSesion = (usuario) => setUsuario(usuario);
    const cerrarSesion = () => setUsuario(null);

    return (
        <UsuarioContext.Provider value={{ usuario, guardarSesion, cerrarSesion }}>
            {children}
        </UsuarioContext.Provider>
    );
};