import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import Dashboard  from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import DetalleProyecto from './components/DetalleProyecto';
import './css/App.css';


const App = () => {

  
  return(
    <div>
      
      <Header/>
      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>
    
      <Footer/>

    </div>
  )
}
export default App;
