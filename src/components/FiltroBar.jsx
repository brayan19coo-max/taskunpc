function FiltroBar({ filtro, setFiltro }) {
  return (
    <div>
      <button onClick={() => setFiltro("todas")}>Todas</button>
      <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
      <button onClick={() => setFiltro("completadas")}>Completadas</button>
    </div>
  );
}

export default FiltroBar;
