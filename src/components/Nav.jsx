import { NavLink } from 'react-router-dom';
import  UsuarioNav  from './UsuarioNav';


const Nav = () => {
    return (

            <nav>
                <ul className="menu">
                    <li> 
                        <NavLink to="/dashboard">Inicio</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/proyectos">Proyectos</NavLink>
                    </li>

                    <li>
                        <NavLink to="/perfil">Perfil</NavLink>
                    </li>
                   <li>
                        <UsuarioNav/>
                   </li>
                </ul>
            </nav>

    );
};
export default Nav;
