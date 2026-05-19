import { useState } from "react";
import proyectoService from "../services/proyectoService";
import FormProyecto from "./FormProyecto";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    const [busqueda, setBusqueda] = useState("");

    const manejarEnvio = (nuevoProyecto) => {
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
    };  

    const eliminarProyecto = (id) => {
        
        proyectoService.eliminarProyecto(id);
        setProyectos(
            proyectoService.obtenerProyectos());
    };

    const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            <FormProyecto agregarProyecto={manejarEnvio} />

            <div className="buscador">
                <input 
                    type="text" 
                    placeholder="Buscar por título"
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                />
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