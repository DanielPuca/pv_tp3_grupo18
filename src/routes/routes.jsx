import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../views/Dashboard';
import ListaProyectos from '../components/ListaProyectos';
import DetalleProyecto from '../components/DetalleProyecto';
import PerfilUsuario from '../views/PerfilUsuario';
import RutaProtegida from '../components/RutaProtegida';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'proyectos', element: <RutaProtegida><ListaProyectos /></RutaProtegida> },
            { path: 'proyectos/:id', element: <RutaProtegida><DetalleProyecto /></RutaProtegida> },
            { path: 'perfil', element: <RutaProtegida><PerfilUsuario /></RutaProtegida> },
        ]
    }
]);

export default routes;