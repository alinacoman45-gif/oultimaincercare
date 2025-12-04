import React from "react";
import { useParams } from "react-router-dom";

export default function LessonGeneric() {
  const { module, lesson } = useParams<{ module?: string; lesson?: string }>();

  const pretty = (s?: string) =>
    s ? s.replace(/-|_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "";

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>{pretty(module)} — {pretty(lesson)}</h1>

      <p style={{ color: "#555" }}>
        Aquí va el contenido de la lección. Puedes incrustar video, texto, links y recursos descargables.
      </p>

      <div style={{ marginTop: 20 }}>
        {/* Ejemplo: reemplaza la URL por la del video real */}
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
