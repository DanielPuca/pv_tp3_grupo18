import { Link, useParams } from "react-router-dom";
import proyectoService from "../services/proyectoService";

const DetalleProyecto = () =>{
    const {id} = useParams();
    const proyectos = proyectoService.obtenerProyectos();
    const proyecto = proyectos.find((proyecto) => proyecto.id === Number(id));
    
    
    if (!proyecto){
         return(
              <div className="contenedor-detalles">
          
                <h2>Proyecto no encontrado</h2>
                 <p>No existe un proyecto con el ID {id}.</p>

                <Link to="/proyectos">
                    <button>Volver</button>
                </Link>
            </div>
        );
    }
    return(
          <div className="contenedor-detalles">
            <section>
                <h2>Detalles del proyecto</h2>
                <p><strong>Descripcion: </strong>{ proyecto.descripcion || 'Sin detalle' }</p>
            </section>

            <section>
                <h2>Recursos Utilizados</h2>

                {proyecto.recursos && proyecto.recursos.length > 0 ? (
                    <ul>
                        {proyecto.recursos.map((r, index)=>(
                            <li key={index} className ="recurso-item">
                                <p><strong>Nombre: </strong>{r.nombre}</p>
                                <p><strong>URL: </strong>{r.url}</p>
                                <p><strong>Estado: </strong>{r.estado}</p>
                                <br />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Sin recursos</p>
                )}
            </section>

            <section>
                <h2>Integrantes y roles</h2>
                    {proyecto.equipo && proyecto.equipo.length > 0 ? (
                        <ul>    
                            {proyecto.equipo.map((eq, index)=>(
                                <li key={index} className="integrante-item">
                                    <strong>Nombre:</strong> {eq.nombre} - <strong>Rol:</strong> {eq.rol}</li>           
                            ))}
                        </ul>
                    ) : (
                    <p>Sin Integrantes</p>
                )}
            </section>
           <Link to="/proyectos">
                <button>Volver</button>
            </Link>
        </div>
    );
}

export default DetalleProyecto;