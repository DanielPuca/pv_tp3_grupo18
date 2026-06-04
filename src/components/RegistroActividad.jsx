import { Alert } from "react-bootstrap";

const RegistroActividad = ({ fechaActualizacion }) => {

    if (!fechaActualizacion) {
        return null;
    }

    const fecha = fechaActualizacion.toLocaleDateString("es-AR");
    const hora = fechaActualizacion.toLocaleTimeString("es-AR", {
        hour : "2-digit",
        minute : "2-digit",
        hour12 : false
    });


    return (
        
        <Alert variant="info" className="registro-actividad">
            Ultima Actualizacion de la lista: {fecha} a las {hora} hs.
        </Alert>
    );
};

export default RegistroActividad;