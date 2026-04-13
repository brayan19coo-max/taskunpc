function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>Materia: {materia}</p>
      <p>Fecha: {fecha}</p>
      <p>Estado: {completada ? "Completada ✅" : "Pendiente ⏳"}</p>
    </div>
  );
}

export default TareaCard;
