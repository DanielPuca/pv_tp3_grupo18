
import { Container, Card, Row, Col } from 'react-bootstrap';
import Login from '../components/Login';
import { useProyectos } from '../context/ProyectosContext';
const Dashboard = () => {
  const { proyectos, proyectosActivos } = useProyectos();
  const proyectosFinalizados = proyectosActivos.filter(
  (proyecto) => proyecto.estado?.toLowerCase() === 'finalizado'
);
  return (
    <div style={{ backgroundColor: '#8fa1b1', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <h1 style={{ color: '#333', fontSize: '3.5rem', fontWeight: 'bold' }}>
                            Gestión de Proyectos Educativos
                </h1>
                <Row className="align-items-center">
                    <Col md={6}>
                        
                        <p style={{ color: '#333', fontSize: '1.2rem'}}>
                           Bienvenido al sistema de gestión de proyectos. Desde aquí podrá consultar y administrar los proyectos registrados.
                        </p>
                        <Card className="mb-3" >
                            <Card.Body>
                            <Card.Title>Total de proyectos {proyectosActivos.length}</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body>
                            <Card.Title>Proyectos activos {proyectosActivos.length}</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body>
                            <Card.Title>
                              Proyectos Finalizados {proyectosFinalizados.length}
                            </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Login />
                    </Col>
                    
                </Row>
            </Container>
        </div>
  )
}

export default Dashboard