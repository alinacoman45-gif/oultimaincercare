import React from "react";
import { Link } from "react-router-dom";

export default function CursoVideoIA() {
  const modules = [
    { slug: "modul-1", title: "Módulo 1 — Fundamentos" },
    { slug: "modul-2", title: "Módulo 2 — Prompt Avanzado" },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26 }}>Curso: De la Idea al Video de Impacto</h1>
      <p style={{ color: "#444" }}>
        Aprende nuestra metodología en 4 pasos y crea videos profesionales con herramientas IA gratuitas.
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        {modules.map((m) => (
          <Link
            key={m.slug}
            to={`/curso-video-ia/${m.slug}`}
            style={{
              padding: 16,
              border: "1px solid #e6e6e6",
              borderRadius: 8,
              textDecoration: "none",
              color: "#111",
              background: "#fff"
            }}
          >
            <h3 style={{ margin: 0 }}>{m.title}</h3>
            <p style={{ margin: "6px 0 0", color: "#666" }}>Ver lecciones del módulo</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
