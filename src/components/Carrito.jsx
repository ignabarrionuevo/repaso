function Carrito({ carrito, eliminar }) {
  return (
    <div className="mt-5">
      <h3>Carrito</h3>

      {carrito.length === 0 && <p>No hay productos</p>}

      <ul className="list-group">
        {carrito.map((p, i) => (
          <li className="list-group-item d-flex justify-content-between">
            {p.nombre} - ${p.precio}
            <button 
              className="btn btn-danger btn-sm"
              onClick={() => eliminar(i)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
