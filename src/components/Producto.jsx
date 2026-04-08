function Producto({ producto, agregar }) {
  return (
    <div className="col-md-4">
      <div className="card p-3 mb-3">

        <img 
          src={producto.img} 
          className="card-img-top"
          alt={producto.nombre}
        />

        <h5 className="mt-2">{producto.nombre}</h5>
        <p>${producto.precio}</p>

        <button 
          className="btn btn-primary"
          onClick={() => agregar(producto)}
        >
          Agregar
        </button>

      </div>
    </div>
  );
}

export default Producto;
