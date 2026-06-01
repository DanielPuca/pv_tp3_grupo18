import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import usuarioService from '../services/usuarioService';

const Login = ({ onIngresar }) => {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    const manejarIngreso = (e) => {
        e.preventDefault();
        const encontrado = usuarioService.validarUsuario(usuario, contrasena);
       if (encontrado) {
            navigate('/proyectos');
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <Card style={{ width: '380px', padding: '30px', borderRadius: '15px' }}>
            <Card.Body>
                <div className="text-center mb-4">
                    <h4>Ingresá a la plataforma</h4>
                </div>
                <Form onSubmit={manejarIngreso}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Usuario"
                            required
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            required
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </Form.Group>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    <Button variant="dark" type="submit" className="w-100">
                        Ingresar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Login;