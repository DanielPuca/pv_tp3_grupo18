const ProyectoCard = ({ proyecto, eliminarProyecto, verDetalleProyecto }) => {

    const { id, titulo, categoria, estado } = proyecto;

    return (
        <article className="proyecto-card">
            <h3>{titulo}</h3>

            <p>
                <strong>Estado:</strong> {estado}
            </p>

            <p>
                <strong>Categoría:</strong> {categoria}
            </p>

            <div className="botones-proyecto">
                <button onClick={() => verDetalleProyecto(proyecto)}>
                    Detalles
                </button>

                <button onClick={() => eliminarProyecto(id)}>
                    Eliminar
                </button>
            </div>
        </article>
    );

};

export default ProyectoCard;