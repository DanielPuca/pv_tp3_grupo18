import {useState} from 'react';

const FormProyecto = ({ agregarProyecto }) => {
    const [proyectoFormulario, setProyectoFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: ""
    });

    const manejarCambio = (evento)=> {
        
        const { name, value } = evento.target;

        setProyectoFormulario({
            ...proyectoFormulario,
            [name]: value
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
            estado: ""
        });
    };
    return (
        <div className="container-form">
                <form className="form-Proyectos"onSubmit={manejarEnvio}>
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

                    <button type="submit">Agregar Proyecto</button>
                </form>
            </div>
    )
}
export default FormProyecto;