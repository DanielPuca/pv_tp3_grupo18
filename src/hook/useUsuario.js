import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

export const useUsuario = () => useContext(UsuarioContext);