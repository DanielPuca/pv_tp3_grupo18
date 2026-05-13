const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Sistema Escolar",
      categoria: "Web",
      estado: "En curso",
      descripcion: "Plataforma para la gestión de alumnos y profesores.",
      imagen: "img/Sistema Escolar.png",
      detalle: "detallep1.html"
    },
    {
      id: 2,
      titulo: "Base de Datos Hospital",
      categoria: "Base de Datos",
      estado: "En curso",
      descripcion: "Gestión de pacientes, médicos y turnos.",
      imagen: "img/BD Hospital.png",
      detalle: "detallep2.html"
    },
    {
      id: 3,
      titulo: "Simulador de Cajero Automático",
      categoria: "Programación",
      estado: "Finalizado",
      descripcion:
        "Programa que simula operaciones bancarias como extracción, depósito y consulta de saldo.",
      imagen: "img/Simulador CA.png",
      detalle: "detallep3.html"
    },
    {
      id: 4,
      titulo: "Sistema de Ventas",
      categoria: "Web",
      estado: "En curso",
      descripcion: "Control de stock y ventas para comercios.",
      imagen: "img/Sistema de Ventas.png",
      detalle: "detallep4.html"
    },
    {
      id: 5,
      titulo: "Gestión Académica",
      categoria: "Base de Datos",
      estado: "Finalizado",
      descripcion: "Administración de materias, notas y alumnos.",
      imagen: "img/Gestion Academica.png",
      detalle: "detallep5.html"
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
// Servicio de proyectos del TP3