import { useState } from "react";
import proyectoService from "../services/proyectoService";
import FormProyecto from "./FormProyecto";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

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
    const verDetalleProyecto = (proyecto) => {
        setProyectoSeleccionado(proyecto);
         console.log("Proyecto seleccionado:", proyecto); //esto no va
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

            <section className="lista-proyectos">
                <h2>Listado de Proyectos</h2>
                <div className="contenedor-cards">
                {
                   proyectosFiltrados.map((proyecto) => (
                        <ProyectoCard
                           key={proyecto.id}
                           proyecto={proyecto}
                           eliminarProyecto={eliminarProyecto}
                           verDetalleProyecto={verDetalleProyecto}
                        />
                    ))
                }
                </div>
            </section>

            <DetalleProyecto proyecto={ proyectoSeleccionado }/>
        </>
    );

};

export default ListaProyectos;