const usuarioService = (() => {

    const usuarios = [
    { id: 1, nombre: "Daniel Puca", dni: "12345678", rol: "Alumno", institucion: "Facultad de Ingeniería - UNJu", usuario: "Daniel", contrasena: "1234" },
    { id: 2, nombre: "Antonella Csongedy", dni: "23456789", rol: "Alumno", institucion: "Facultad de Ingeniería - UNJu", usuario: "Antonella", contrasena: "1234" },
    { id: 3, nombre: "Lucas Velasquez", dni: "34567890", rol: "Alumno", institucion: "Facultad de Ingeniería - UNJu", usuario: "Lucas", contrasena: "1234" }
];

    const validarUsuario = (usuario, contrasena) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const encontrado = usuarios.find(
                    (u) => u.usuario === usuario && u.contrasena === contrasena
                );
                if (encontrado) {
                    resolve(encontrado);
                } else {
                    reject(new Error('Usuario o contraseña incorrectos'));
                }
            }, 800);
        });
    };

    return { 
        validarUsuario,
        usuarios
    };
})();

export default usuarioService;