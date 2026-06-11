import { createContext, useContext, useEffect, useState } from 'react';
import proyectoService from "../services/proyectoService";
const ProyectosContext = createContext();

export const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState(() => {
    const guardados = localStorage.getItem('proyectos');

    if (guardados) {
      return JSON.parse(guardados);
    }

    return proyectoService.obtenerProyectos();
  });

  useEffect(() => {
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
  }, [proyectos]);

  const agregarProyecto = (nuevoProyecto) => {
    setProyectos([
      ...proyectos,
      {
        ...nuevoProyecto,
        id: Date.now(),
        eliminado: false,
      },
    ]);
  };

  const actualizarProyecto = (proyectoActualizado) => {
    setProyectos(
      proyectos.map((proyecto) =>
        proyecto.id === proyectoActualizado.id ? proyectoActualizado : proyecto
      )
    );
  };

  const eliminarProyecto = (id) => {
    setProyectos(
      proyectos.map((proyecto) =>
        proyecto.id === id ? { ...proyecto, eliminado: true } : proyecto
      )
    );
  };

  const proyectosActivos = proyectos.filter(
    (proyecto) => proyecto.eliminado !== true
  );

  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        proyectosActivos,
        agregarProyecto,
        actualizarProyecto,
        eliminarProyecto,
      }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export const useProyectos = () => useContext(ProyectosContext);