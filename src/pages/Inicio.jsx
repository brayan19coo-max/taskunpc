import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import TareaCard from "../components/TareaCard";
import FiltroBar from "../components/FiltroBar";
import BotonNuevo from "../components/BotonNuevo";

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div>
      <FiltroBar filtro={filtro} setFiltro={setFiltro} />
      <BotonNuevo />
      {tareasFiltradas.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default Inicio;
