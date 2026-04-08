function Navbar({ setVista }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        
        <span className="navbar-brand">Mi Tienda</span>

        <div>
          <button 
            className="btn btn-outline-light me-2"
            onClick={() => setVista("productos")}
          >
            Productos
          </button>

          <button 
            className="btn btn-outline-light"
            onClick={() => setVista("carrito")}
          >
            Carrito
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
