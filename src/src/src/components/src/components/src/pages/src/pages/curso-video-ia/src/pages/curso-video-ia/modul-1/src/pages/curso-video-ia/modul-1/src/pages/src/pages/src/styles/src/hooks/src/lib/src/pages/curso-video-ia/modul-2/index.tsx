src/pages/curso-video-ia/modul-2/index.tsx

import React from "react";
import { Link } from "react-router-dom";
export default function Modul2() {
  const lessons = [
    { id: "lesson-1", title: "Lección 1 — Prompts Avanzados" },
    { id: "lesson-2", title: "Lección 2 — Optimización de Videos" },
  ];
  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>Módulo 2 — Prompt Avanzado</h1>
      <p style={{ color: "#555" }}>Aquí están las lecciones del módulo 2.</p>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {lessons.map((l) => (
          <li key={l.id} style={{ marginBottom: 10 }}>
            <Link
              to={`/curso-video-ia/modul-2/${l.id}`}
              style={{ textDecoration: "none", color: "#111", padding: 12, display: "block", border: "1px solid #eee", borderRadius: 8 }}
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
