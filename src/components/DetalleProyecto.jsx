

const DetalleProyecto = ({ proyecto }) =>{

    if (!proyecto) return null;

    return(
        <div>
            <section>
                <h2>Detalles del proyecto</h2>
                <p><strong>Descripcion: </strong>{ proyecto.descripcion || 'Sin detalle' }</p>
            </section>
            <section>
                <h2>Recursos Utilizados</h2>
                <ul>
                    {proyecto.recursos.map((r)=>(
                        <li>{r.nombre}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Integrantes y roles</h2>

                <ul>
                    {proyecto.equipo.map((eq)=>(
                        <li>{eq.nombre} - {eq.rol}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default DetalleProyecto;