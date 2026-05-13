const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Sistema Escolar",
      categoria: "Web",
      estado: "En curso"
    },
    {
      id: 2,
      titulo: "Base de Datos Hospital",
      categoria: "Base de Datos",
      estado: "En curso"
    },
    {
      id: 3,
      titulo: "Simulador de Cajero Automático",
      categoria: "Programación",
      estado: "Finalizado"
    },
    {
      id: 4,
      titulo: "Sistema de Ventas",
      categoria: "Web",
      estado: "En curso"
    },
    {
      id: 5,
      titulo: "Gestión Académica",
      categoria: "Base de Datos",
      estado: "Finalizado"
    }
  ];

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const agregarProyecto = (nuevoProyecto) => {
    proyectos = [...proyectos, nuevoProyecto];
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((proyecto) => proyecto.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
    );
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();

export default proyectoService;