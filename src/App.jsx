import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import { tareasIniciales } from "./data";

function App() {
  const pendientes = tareasIniciales.filter((t) => !t.completada).length;

  return (
    <div>
      <Header tareasPendientes={pendientes} />
      <ListaTareas />
    </div>
  );
}

export default App;
