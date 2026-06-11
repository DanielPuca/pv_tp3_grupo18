import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { UsuarioProvider } from './context/UsuarioContext';
import { ProyectosProvider } from './context/ProyectosContext';
import './css/App.css';


const App = () => {

  return(
    <UsuarioProvider>
      <ProyectosProvider>
          <Header />
          <Nav />
            <main>
              <Outlet />
            </main>
          <Footer />
      </ProyectosProvider>
    </UsuarioProvider>
  )
}

export default App;
