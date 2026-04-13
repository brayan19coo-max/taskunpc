import { useNavigate } from "react-router-dom";

function BotonNuevo() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/nueva")}>+ Nueva Tarea</button>;
}

export default BotonNuevo;
