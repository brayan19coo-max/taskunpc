import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: "", materia: "", fecha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate("/");
  }

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título" onChange={handleChange} />
        <input name="materia" placeholder="Materia" onChange={handleChange} />
        <input name="fecha" type="date" onChange={handleChange} />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default NuevaTarea;
