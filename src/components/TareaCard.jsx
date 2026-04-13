import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();
  const navigate = useNavigate();

  return (
    <div style={{ opacity: completada ? 0.5 : 1 }}>
      <h3 style={{ textDecoration: completada ? "line-through" : "none" }}>
        {titulo}
      </h3>
      <p>Materia: {materia}</p>
      <p>Fecha: {fecha}</p>
      <p>Estado: {completada ? "Completada ✅" : "Pendiente ⏳"}</p>
      <button onClick={() => toggleTarea(id)}>
        {completada ? "Marcar pendiente" : "Marcar completada"}
      </button>
      <button onClick={() => navigate(`/tarea/${id}`)}>Ver detalle</button>
    </div>
  );
}

export default TareaCard;
