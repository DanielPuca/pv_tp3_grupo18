import { useEffect, useRef, useState } from "react";
import { useProyectos } from "../context/ProyectosContext";
import FormProyecto from "./FormProyecto";
import ProyectoCard from "./ProyectoCard";
import RegistroActividad from "./RegistroActividad";
import {Container, Form, Row, Col} from 'react-bootstrap';

const ListaProyectos = () => {

    const { proyectos, agregarProyecto, eliminarProyecto: eliminarProyectoContexto } = useProyectos();

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
    huboModificacion.current = true;
    agregarProyecto(nuevoProyecto);
   };

   const eliminarProyecto = (id) => {
    huboModificacion.current = true;
    eliminarProyectoContexto(id);
   };
   
  const proyectosFiltrados = proyectos.filter((proyecto) =>
  proyecto.eliminado !== true &&
  (proyecto.titulo ?? "").toLowerCase().includes(busqueda.toLowerCase())
);
    return (
        <Container>
            <FormProyecto agregarProyecto={manejarEnvio} />

            <Form.Group className="buscador">
                <Form.Label>Buscar Proyectos:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Buscar por título"
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                />
            </Form.Group>

            <section className="lista-proyectos">
                <h2>Listado de Proyectos</h2>
                <Row>
                    {
                    proyectosFiltrados.map((proyecto) => (
                        <Col key={proyecto.id} md={4} sm={6} xs={12}>
                            <ProyectoCard
                            proyecto={proyecto}
                            eliminarProyecto={eliminarProyecto}
                            />
                        </Col>
                        ))
                    }
                </Row>
            </section>

            <RegistroActividad fechaActualizacion={ultimaActualizacion} />
        </Container>
    );

};

export default ListaProyectos;