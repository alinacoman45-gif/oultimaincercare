import React from "react";

export default function Lesson1Fixed() {
  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>Lección 1 — Introducción y configuración</h1>
      <p style={{ color: "#555" }}>
        En esta lección vas a aprender a configurar tu asistente IA y preparar el entorno.
      </p>

      <div style={{ marginTop: 20 }}>
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/XXXXXXXX"
          title="Video lección"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
