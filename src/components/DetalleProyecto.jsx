

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
                        {proyecto.recursos.map((r)=>(
                            <li>{r.nombre}</li>
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
                            {proyecto.equipo.map((eq)=>(
                                <li>{eq.nombre} - {eq.rol}</li>
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