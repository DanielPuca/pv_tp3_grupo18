import {useState} from 'react';
import { Form, Button } from "react-bootstrap";

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
                <Form className="form-Proyectos"onSubmit={manejarEnvio}>
                     <div className="info-form">
                        <h2>Información del proyecto:</h2>
                        <Form.Control 
                            type="text" 
                            name="titulo"
                            placeholder = "Título del proyecto"
                            value={proyectoFormulario.titulo}
                            onChange={manejarCambio}
                            required
                        />
                        <Form.Control 
                            type="text" 
                            name="categoria"
                            placeholder = "Categoría del proyecto"
                            value={proyectoFormulario.categoria}
                            onChange={manejarCambio}
                            required
                        />
                        <Form.Control 
                            type="text" 
                            name="estado"
                            placeholder = "Estado del proyecto"
                            value={proyectoFormulario.estado}
                            onChange={manejarCambio}
                            required
                        />
                      
                            <Form.Check  className="check-disponible"
                                type="checkbox"
                                label="Disponible"
                                name="disponible"
                                checked={proyectoFormulario.disponible}
                                onChange={manejarCambio}
                            /> 
                        
                    </div>
                    <div className="descripcion-form">
                        <h2>Descripción:</h2>
                        <Form.Control
                            as="textarea"
                            rows= {4}
                            name="descripcion"
                            placeholder="Descripción del proyecto"
                            value={proyectoFormulario.descripcion}
                            onChange={manejarCambio}
                        />
                    </div>
                    <div className="recursos-form">
                        <h2>Recursos:</h2>
                        <Form.Control
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
                        <Form.Control
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
                        <Form.Control
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
                        <Button type="button" onClick={agregarRecurso}>
                            +Agregar recurso
                        </Button>
                    </div>
                    <div className="equipo-form">
                        <h2>Equipo:</h2>
                        <Form.Control
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
                        <Form.Control
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
                        <Button type="button" onClick={agregarIntegrante}>
                            +Agregar integrante
                        </Button>
                    </div>
                    <Button type="submit" className="boton-agregar">
                        Agregar Proyecto
                    </Button>
                </Form>
            </div>
    )
}
export default FormProyecto;