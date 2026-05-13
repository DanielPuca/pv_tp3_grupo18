import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [proyectoFormulario, setProyectoFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: ""
    });

    const [busqueda, setBusqueda] = useState("");

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
        
        proyectoService.agregarProyecto(nuevoProyecto);

        setProyectos(proyectoService.obtenerProyectos());

        setProyectoFormulario({
            titulo: "",
            categoria: "",
            estado: ""
        });
    };

    const eliminarProyecto = (id) => {
        
        proyectoService.eliminarProyecto(id);
        setProyectos(
            proyectoService.obtenerProyectos());
    };

    const proyectosFiltrados = proyectos.filter(proyecto =>
        proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            <div class="container-form">
                <form class="form-Proyectos"onSubmit={manejarEnvio}>
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
                <div class ="buscador">
                    <input 
                    type="text" 
                    placeholder="Buscar por título"
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                />
                </div>
            </div>
            <section>
                <h2>Listado de Proyectos</h2>
                {
                   proyectosFiltrados.map((proyecto) => (
                        <article key={proyecto.id}>
                            <h3>{proyecto.titulo}</h3>
                            <p>Categoría: {proyecto.categoria}</p>
                            <p>Estado: {proyecto.estado}</p>
                            <button onClick={() => eliminarProyecto(proyecto.id)}>Eliminar</button>
                        </article>
                    ))
                }
            </section>
        </>
    );

};

export default ListaProyectos;