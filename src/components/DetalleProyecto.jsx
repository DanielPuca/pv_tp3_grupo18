

const DetalleProyecto = ({ proyecto }) =>{

    if (!proyecto) return null;

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
                            <li key={index}>
                                <h2>Recurso {index + 1}:</h2>
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
                                <li key={index}>
                                    <strong>Nombre:</strong> {eq.nombre} - <strong>Rol:</strong> {eq.rol}</li>           
                            ))}
                        </ul>
                    ) : (
                    <p>Sin Integrantes</p>
                )}
            </section>
        </div>
    );
}

export default DetalleProyecto;