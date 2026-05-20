const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Sistema Escolar",
      categoria: "Web",
      estado: "En curso",
      descripcion: [
        "El Sistema Escolar es una aplicación web pensada para organizar la información académica de una institución educativa.",
        "Este proyecto permite representar datos relacionados con alumnos, materias, cursos y gestión general."
      ],
      recursos: [
        { nombre: "PDF", url: "#", estado: "Pendiente" },
        { nombre: "Drive", url: "#", estado: "Pendiente" },
        { nombre: "GitHub", url: "https://github.com/DanielPuca/pv_tp3_grupo18", estado: "Disponible" }
      ],
      equipo: [
        { nombre: "Antonella Csongedy", rol: "ProyectoCard" },
        { nombre: "Lucas Velasquez", rol: "DetalleProyecto" },
        { nombre: "Daniel Puca", rol: "Refactorización de ListaProyectos" }
      ]
    },
    {
      id: 2,
      titulo: "Base de Datos Hospital",
      categoria: "Base de Datos",
      estado: "En curso",
      descripcion: [
        "Este proyecto representa una base de datos orientada a la gestión de información hospitalaria.",
        "Incluye datos relacionados con pacientes, turnos, médicos y áreas de atención."
      ],
      recursos: [
        { nombre: "PDF", url: "#", estado: "Pendiente" },
        { nombre: "Drive", url: "#", estado: "Pendiente" },
        { nombre: "GitHub", url: "https://github.com/DanielPuca/pv_tp3_grupo18", estado: "Disponible" }
      ],
      equipo: [
        { nombre: "Antonella Csongedy", rol: "ProyectoCard" },
        { nombre: "Lucas Velasquez", rol: "DetalleProyecto" },
        { nombre: "Daniel Puca", rol: "Refactorización de ListaProyectos" }
      ]
    },
    {
      id: 3,
      titulo: "Simulador de Cajero Automático",
      categoria: "Programación",
      estado: "Finalizado",
      descripcion: [
        "El Simulador de Cajero Automático representa operaciones básicas como consultar saldo, extraer dinero y depositar.",
        "Su objetivo es practicar estructuras de control, validaciones y organización lógica de un programa."
      ],
      recursos: [
        { nombre: "PDF", url: "#", estado: "Pendiente" },
        { nombre: "Drive", url: "#", estado: "Pendiente" },
        { nombre: "GitHub", url: "https://github.com/DanielPuca/pv_tp3_grupo18", estado: "Disponible" }
      ],
      equipo: [
        { nombre: "Antonella Csongedy", rol: "ProyectoCard" },
        { nombre: "Lucas Velasquez", rol: "DetalleProyecto" },
        { nombre: "Daniel Puca", rol: "Refactorización de ListaProyectos" }
      ]
    },
    {
      id: 4,
      titulo: "Sistema de Ventas",
      categoria: "Web",
      estado: "En curso",
      descripcion: [
        "El Sistema de Ventas es una aplicación pensada para registrar productos, clientes y operaciones comerciales.",
        "Este desarrollo permite aplicar componentes reutilizables en React y separar la vista general del detalle."
      ],
      recursos: [
        { nombre: "PDF", url: "#", estado: "Pendiente" },
        { nombre: "Drive", url: "#", estado: "Pendiente" },
        { nombre: "GitHub", url: "https://github.com/DanielPuca/pv_tp3_grupo18", estado: "Disponible" }
      ],
      equipo: [
        { nombre: "Antonella Csongedy", rol: "ProyectoCard" },
        { nombre: "Lucas Velasquez", rol: "DetalleProyecto" },
        { nombre: "Daniel Puca", rol: "Refactorización de ListaProyectos" }
      ]
    },
    {
      id: 5,
      titulo: "Gestión Académica",
      categoria: "Base de Datos",
      estado: "Finalizado",
      descripcion: [
        "Gestión Académica es un proyecto orientado a administrar información vinculada a estudiantes, materias y docentes.",
        "La finalidad es organizar los datos de forma clara y permitir que cada proyecto tenga una vista resumida y una vista detallada."
      ],
      recursos: [
        { nombre: "PDF", url: "#", estado: "Pendiente" },
        { nombre: "Drive", url: "#", estado: "Pendiente" },
        { nombre: "GitHub", url: "https://github.com/DanielPuca/pv_tp3_grupo18", estado: "Disponible" }
      ],
      equipo: [
        { nombre: "Antonella Csongedy", rol: "ProyectoCard" },
        { nombre: "Lucas Velasquez", rol: "DetalleProyecto" },
        { nombre: "Daniel Puca", rol: "Refactorización de ListaProyectos" }
      ]
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
