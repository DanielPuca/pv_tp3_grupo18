import { Link } from "react-router-dom";
import { Button, ListGroup, Card } from "react-bootstrap";

const ProyectoCard = ({ proyecto, eliminarProyecto }) => {

    const { id, titulo, categoria, estado } = proyecto;

    return (
        <Card className="proyecto-card">

            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <strong>Estado:</strong> {estado}
                </ListGroup.Item>

                <ListGroup.Item>
                    <strong>Categoría:</strong> {categoria}
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <div className="botones-proyecto">
                <Link to={`/proyectos/${id}`}>
                        <Button variant="primary">Detalles</Button>
                </Link>

                    <Button variant="danger" onClick={() => eliminarProyecto(id)}>
                        Eliminar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );

};

export default ProyectoCard;