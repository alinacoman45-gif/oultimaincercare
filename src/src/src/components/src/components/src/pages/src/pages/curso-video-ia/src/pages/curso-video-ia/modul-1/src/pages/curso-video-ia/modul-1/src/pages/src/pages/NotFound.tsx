import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Página no encontrada</h2>
      <p>La ruta no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
