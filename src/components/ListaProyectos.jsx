import { useEffect,useRef, useState } from "react";
import proyectoService from "../services/proyectoService";
import FormProyecto from "./FormProyecto";
import ProyectoCard from "./ProyectoCard";
import RegistroActividad from "./RegistroActividad";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");
    const [ultimaActualizacion, setUltimaActualizacion] = useState(null);
   const huboModificacion = useRef(false);

    useEffect(() => {
        if (huboModificacion.current) {
        setUltimaActualizacion(new Date());
        huboModificacion.current = false;
        }
    }, [proyectos]);
   
    const manejarEnvio = (nuevoProyecto) => {
        proyectoService.agregarProyecto(nuevoProyecto);
        huboModificacion.current = true;
        setProyectos((proyectosPrevios) => [
        ...proyectosPrevios,
        nuevoProyecto
        ]);
    };  

    const eliminarProyecto = (id) => {
        
        proyectoService.eliminarProyecto(id);
        huboModificacion.current = true;
        setProyectos((proyectosPrevios) =>
            proyectosPrevios.filter((proyecto) => proyecto.id !== id)
        );
    };
   
    const proyectosFiltrados = proyectos.filter((proyecto) =>
         proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            <FormProyecto agregarProyecto={manejarEnvio} />

            <div className="buscador">
                <h2>Buscar Proyectos:</h2>
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
                        />
                    ))
                }
                </div>
            </section>

            <RegistroActividad fechaActualizacion={ultimaActualizacion} />
        </>
    );

};

export default ListaProyectos;