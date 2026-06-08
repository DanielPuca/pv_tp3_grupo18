import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import usuarioService from '../services/usuarioService';
import { useUsuario } from '../hook/useUsuario';

const Login = () => {  

    const navigate = useNavigate();

    const [form, setForm] = useState({
        usuario: '',
        contrasena: ''
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [erroresCampo, setErroresCampo] = useState({});

    const { guardarSesion } = useUsuario();// Context para guardar la sesión del usuario

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

        if (erroresCampo[name]) {
             setErroresCampo(prev => ({ ...prev, [name]: null }));
        };
    };
    
    const validarForm = ({ usuario, contrasena }) => {
        const errores = {};

        if (!usuario.trim()) {
            errores.usuario = 'El usuario es obligatorio';
        } 
        if (!contrasena.trim()) {
            errores.contrasena = 'La contraseña es obligatoria';
        } else if (contrasena.length < 4) {
            errores.contrasena = 'La contraseña debe tener al menos 4 caracteres';
        }
        return errores;
    };

    const manejarIngreso = async(e) => {
        e.preventDefault(); 
        setError("");

        const errores = validarForm(form);
        if (Object.keys(errores).length > 0) {
            setErroresCampo(errores);
            return;
        }
        
        setLoading(true);

        try {
            const encontrado = await usuarioService.validarUsuario(form.usuario, form.contrasena);
                guardarSesion(encontrado);
                navigate('/proyectos');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
    }

    const formularioIncompleto = !form.usuario.trim() || !form.contrasena.trim();

    return (
        <Card style={{ width: '380px', padding: '30px', borderRadius: '15px' }}>
            <Card.Body>
                <div className="text-center mb-4">
                    <h4>Ingresá a la plataforma</h4>
                </div>
                <Form onSubmit={manejarIngreso} noValidate>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="usuario"
                            placeholder="Usuario"
                            value={form.usuario}
                            onChange={manejarCambio}
                        />
                         {erroresCampo.usuario && (
                                <p style={{ color: 'red', fontSize: '0.85rem' }}>
                                    {erroresCampo.usuario}
                                </p>
                            )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            name="contrasena"
                            placeholder="Contraseña"
                            value={form.contrasena}
                            onChange={manejarCambio}
                            
                        />
                        {erroresCampo.contrasena && (
                                <p style={{ color: 'red', fontSize: '0.85rem' }}>
                                    {erroresCampo.contrasena}
                                </p>
                            )}
                    </Form.Group>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    <Button variant="dark" type="submit" className="w-100" disabled={loading || formularioIncompleto}>
                        {loading ? 'Ingresando...' : 'Ingresar'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Login;