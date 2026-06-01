import { Container, Card, Row, Col } from "react-bootstrap";
import usuarioService from "../services/usuarioService";

const PerfilUsuario = () => {

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Equipo de Desarrollo</h2>
      <Row className="mt-3">
        {usuarioService.integrantes.map((integrante, index) => (
          <Col md={4} key={index}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{integrante.nombre}</Card.Title>
                <Card.Text>
                  <strong>Rol:</strong> {integrante.rol}
                  <br />
                  <strong>Institución:</strong> {integrante.Institucion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PerfilUsuario;
