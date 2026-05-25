import {useState} from 'react';

const FormProyecto = ({ agregarProyecto }) => {
    const [proyectoFormulario, setProyectoFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        disponible: true,
        descripcion: "",
        recursos: [],
        equipo: []
    });

    const [recursos, setRecursos] = useState([{
        nombre: "",
        url: "",
        estado: ""
    }]);

    const [integrante, setIntegrante] = useState({
        nombre: "",
        rol: ""
    });

    const manejarCambio = (evento)=> {
        
        const { name, value, type, checked } = evento.target;

        setProyectoFormulario({
            ...proyectoFormulario,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const manejarEnvio = (evento) => {
        evento.preventDefault();

        const nuevoProyecto = {
            id: Date.now(),
            ...proyectoFormulario
        };
        agregarProyecto(nuevoProyecto);
        
        setProyectoFormulario({
            titulo: "",
            categoria: "",
            estado: "",
            disponible: true,
            descripcion: "",
            recursos: [],
            equipo: []
        });
    };

    const agregarRecurso = () => {
        setProyectoFormulario({
            ...proyectoFormulario,
            recursos: [
                ...proyectoFormulario.recursos,
                recursos]
        });
        setRecursos({nombre: "", url: "", estado: ""});
    };

    const agregarIntegrante = () => {

        setProyectoFormulario({
            ...proyectoFormulario,
            equipo: [
                ...proyectoFormulario.equipo,
                integrante]
        });
        setIntegrante({nombre: "", rol: ""});
    };

    return (
        <div className="container-form">
                <form className="form-Proyectos"onSubmit={manejarEnvio}>
                     <div className="info-form">
                        <h2>Información del proyecto:</h2>
                        <input 
                            type="text" 
                            name="titulo"
                            placeholder = "Título del proyecto"
                            value={proyectoFormulario.titulo}
                            onChange={manejarCambio}
                            required
                        />
                        <input 
                            type="text" 
                            name="categoria"
                            placeholder = "Categoría del proyecto"
                            value={proyectoFormulario.categoria}
                            onChange={manejarCambio}
                            required
                        />
                        <input 
                            type="text" 
                            name="estado"
                            placeholder = "Estado del proyecto"
                            value={proyectoFormulario.estado}
                            onChange={manejarCambio}
                            required
                        />
                        <label className="check-disponible">
                            Disponible: 
                            <input
                                type="checkbox"
                                name="disponible"
                                checked={proyectoFormulario.disponible}
                                onChange={manejarCambio}
                            /> 
                        </label>
                    </div>
                    <div className="descripcion-form">
                        <h2>Descripción:</h2>
                        <textarea
                            type="text"
                            name="descripcion"
                            placeholder="Descripción del proyecto"
                            value={proyectoFormulario.descripcion}
                            onChange={manejarCambio}
                        />
                    </div>
                    <div className="recursos-form">
                        <h2>Recursos:</h2>
                        <input
                            type="text"
                            name="nombreRecurso"
                            placeholder="Nombre del recurso"
                            value={recursos.nombre}
                            onChange={(e) =>
                                setRecursos({
                                    ...recursos,
                                    nombre: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            name="urlRecurso"
                            placeholder="URL del recurso"
                            value={recursos.url}
                            onChange={(e) =>
                                setRecursos({
                                    ...recursos,
                                    url: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            name="estadoRecurso"
                            placeholder="Estado del recurso"
                            value={recursos.estado}
                            onChange={(e) =>
                                setRecursos({
                                    ...recursos,
                                    estado: e.target.value
                                })
                            }
                        />
                        <button type="button" onClick={agregarRecurso}>
                            +Agregar recurso
                        </button>
                    </div>
                    <div className="equipo-form">
                        <h2>Equipo:</h2>
                        <input
                            type="text"
                            name="nombreIntegrante"
                            placeholder="Nombre del integrante"
                            value={integrante.nombre}
                            onChange={(e) =>
                                setIntegrante({
                                    ...integrante,
                                    nombre: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            name="rolIntegrante"
                            placeholder="Rol del integrante"
                            value={integrante.rol}
                            onChange={(e) =>
                                setIntegrante({
                                    ...integrante,
                                    rol: e.target.value
                                })
                            }
                        />
                        <button type="button" onClick={agregarIntegrante}>
                            +Agregar integrante
                        </button>
                    </div>
                    <button type="submit" className="boton-agregar">
                        Agregar Proyecto
                    </button>
                </form>
            </div>
    )
}
export default FormProyecto;