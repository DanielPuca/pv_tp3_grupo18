const usuarioService = (() => {
    const usuarios = [
        { usuario: "Daniel", contrasena: "1234" },
        { usuario: "Antonella", contrasena: "1234" },
        { usuario: "Lucas", contrasena: "1234" }
    ];
    const integrantes = [
        { nombre: "Daniel Puca", rol: "Alumno", Institucion: "Facultatad de Ingeniería" },
        { nombre: "Antonella Csongedy", rol: "Alumno", Institucion: "Facultad de Ingeniería" },
        { nombre: "Lucas Velasquez", rol: "Alumno", Institucion: "Facultad de Ingeniería" },
        { nombre: "Gustavo Sosa", rol: "Docente", Institucion: "Facultad de Ingeniería" }
    ];

    const validarUsuario = (usuario, contrasena) => {
        return usuarios.find(
            (u) => u.usuario === usuario && u.contrasena === contrasena
        );
    };

    return { 
        validarUsuario, 
        integrantes 
    };
})();

export default usuarioService;