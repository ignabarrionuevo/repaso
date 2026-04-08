import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [vista, setVista] = useState("productos"); // 👈 CLAVE

  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) setCarrito(JSON.parse(data));
  }, []); // ACTUALIZAR LA PÁGINA CON LOS DATOS QUE LE HABIA DEJADO ANTES
          // DE ACTUALIZARLA.

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]); // CADA VEZ QUE CAMBIE EL CARRITO, GUARDA LOS DATOS EN LOCALSTORAGE PARA QUE NO SE PIERDAN AL ACTUALIZAR LA PÁGINA.

  const productos = [
  { id: 1, nombre: "Remera", precio: 5000, img: "https://acdn-us.mitiendanube.com/stores/003/588/275/products/natural-5-efe07c5f85501422f217217464769436-1024-1024.webp" },
  { id: 2, nombre: "Pantalón", precio: 10000, img: "https://marcopololp.com.ar/wp-content/uploads/2021/10/pantalon-drake-verde-old-bridge-marco-polo-1.jpg" },
  { id: 3, nombre: "Zapatillas", precio: 20000, img: "https://via.placeholder.com/150" }
];


  const agregar = (p) => setCarrito([...carrito, p]);

  const eliminar = (i) => {
    const nuevo = [...carrito];
    nuevo.splice(i, 1);
    setCarrito(nuevo);
  };

  return (
    <>
      <Navbar setVista={setVista} /> {/* 👈 le pasás la función */}

      <div className="container mt-4">

        {vista === "productos" && (
          <>
            <h2>Productos</h2>
            <div className="row">
              {productos.map(p => (
                <Producto key={p.id} producto={p} agregar={agregar} />
              ))}
            </div>
          </>
        )}

        {vista === "carrito" && (
          <Carrito carrito={carrito} eliminar={eliminar} />
        )}

      </div>
    </>
  );
}

export default App;
