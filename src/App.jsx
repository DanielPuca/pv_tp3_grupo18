import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import Dashboard  from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import DetalleProyecto from './components/DetalleProyecto';
import { UsuarioProvider } from './context/UsuarioContext';
import { ProyectosProvider } from './context/ProyectosContext';
import './css/App.css';


const App = () => {

  
  return(
    <UsuarioProvider>
      <ProyectosProvider>
        <div>
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/proyectos" element={<><Header /><Nav /><main><ListaProyectos /></main></>} />
              <Route path="/proyectos/:id" element={<><Header /><Nav /><main><DetalleProyecto /></main></>} />
              <Route path="/perfil" element={<><Header /><Nav /><main><PerfilUsuario /></main></>} />
           </Routes>
         </main>
    
         <Footer/>

        </div>
      </ProyectosProvider>
    </UsuarioProvider>
  )
}
export default App;
