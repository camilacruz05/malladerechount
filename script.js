const coloresPorAnio = [
  "#d9c8f7", // 1° año - lila
  "#fcd6e5", // 2° año - rosa
  "#c8f7c5", // 3° año - verde
  "#fdf6b2", // 4° año - amarillo
  "#c6eaff", // 5° año - celeste
  "#e0e0e0", // 6° año - plateado
];

const materias = [
  // 1° Año - 1° Semestre
  { nombre: "Contenidos Transversales", requisitos: [], anio: 1, semestre: 1 },
  { nombre: "Historia del Pensamiento Pol. y Jur.", requisitos: [], anio: 1, semestre: 1 },
  { nombre: "Teoría del Derecho y la Justicia", requisitos: [], anio: 1, semestre: 1 },

  // 1° Año - 2° Semestre
  { nombre: "Teoría del Estado", requisitos: [], anio: 1, semestre: 2 },
  { nombre: "Nociones Económicas", requisitos: [], anio: 1, semestre: 2 },
  { nombre: "Nociones de Sociología", requisitos: ["Contenidos Transversales", "Historia del Pensamiento Pol. y Jur.", "Teoría del Estado"], anio: 1, semestre: 2 },
  { nombre: "Lógica", requisitos: ["Contenidos Transversales", "Historia del Pensamiento Pol. y Jur.", "Teoría del Derecho y la Justicia"], anio: 1, semestre: 2 },
  { nombre: "Teoría de la Rel. Jurídica y Der. de la Persona", requisitos: ["Contenidos Transversales", "Teoría del Derecho y la Justicia", "Nociones Económicas"], anio: 1, semestre: 2 },
  { nombre: "Destrezas I", requisitos: [], anio: 1, semestre: 2 },

  // 2° Año
  { nombre: "Derecho Constitucional", requisitos: ["Contenidos Transversales", "Historia del Pensamiento Pol. y Jur.", "Teoría del Estado", "Teoría del Derecho y la Justicia"], anio: 2, semestre: 1 },
  { nombre: "Obligaciones Civiles y Comerciales", requisitos: ["Teoría de la Rel. Jurídica y Der. de la Persona"], anio: 2, semestre: 1 },
  { nombre: "Derecho Penal I: Parte General", requisitos: ["Derecho Constitucional"], anio: 2, semestre: 1 },
  { nombre: "Destrezas II: Argumentación Oral y Escrita", requisitos: ["Destrezas I", "Lógica", "Nociones de Sociología"], anio: 2, semestre: 1 },

  { nombre: "Contratos", requisitos: ["Obligaciones Civiles y Comerciales"], anio: 2, semestre: 2 },
  { nombre: "Derecho Penal II: Parte Especial", requisitos: ["Derecho Penal I: Parte General"], anio: 2, semestre: 2 },
  { nombre: "Derecho de la Empresa y los Negocios", requisitos: ["Contratos"], anio: 2, semestre: 2 },
  { nombre: "Derechos Humanos", requisitos: ["Derecho Constitucional"], anio: 2, semestre: 2 },

  // 3° Año
  { nombre: "Derecho Societario y Cambiario", requisitos: ["Derecho de la Empresa y los Negocios"], anio: 3, semestre: 1 },
  { nombre: "Derecho Procesal I: Teoría General del Proceso y Proceso Penal", requisitos: ["Derecho Constitucional", "Teoría de la Rel. Jurídica y Der. de la Persona", "Derecho Penal II: Parte Especial"], anio: 3, semestre: 1 },
  { nombre: "Derecho Ambiental", requisitos: ["Derecho Constitucional", "Contratos"], anio: 3, semestre: 1 },
  { nombre: "Derecho del Trabajo y de la Seguridad Social", requisitos: ["Derecho Constitucional", "Contratos"], anio: 3, semestre: 1 },
  { nombre: "Derechos Reales", requisitos: ["Derecho Constitucional", "Contratos"], anio: 3, semestre: 1 },

  { nombre: "Derecho Procesal II: Proceso Civil y Comercial", requisitos: ["Obligaciones Civiles y Comerciales", "Derecho Procesal I: Teoría General del Proceso y Proceso Penal"], anio: 3, semestre: 2 },
  { nombre: "Destrezas III: Investigación Jurídica", requisitos: ["Obligaciones Civiles y Comerciales", "Destrezas II: Argumentación Oral y Escrita", "Derecho Penal I: Parte General"], anio: 3, semestre: 2 },

  // 4° Año
  { nombre: "Derecho de Familia y de las Sucesiones", requisitos: ["Derecho Procesal I: Teoría General del Proceso y Proceso Penal", "Derechos Reales"], anio: 4, semestre: 1 },
  { nombre: "Derecho del Transporte", requisitos: ["Derecho de la Empresa y los Negocios"], anio: 4, semestre: 1 },
  { nombre: "Filosofía del Derecho", requisitos: ["Nociones de Sociología", "Derechos Humanos", "Derecho del Trabajo y de la Seguridad Social"], anio: 4, semestre: 1 },
  { nombre: "Concursos y Privilegios", requisitos: ["Derecho Societario y Cambiario", "Derecho Procesal II: Proceso Civil y Comercial"], anio: 4, semestre: 1 },

  { nombre: "Derecho Administrativo", requisitos: ["Derechos Reales", "Derecho Procesal II: Proceso Civil y Comercial"], anio: 4, semestre: 2 },
  { nombre: "Destrezas IV: Habilidades para el Litigio", requisitos: ["Destrezas III: Investigación Jurídica", "Contratos", "Derecho Procesal I: Teoría General del Proceso y Proceso Penal"], anio: 4, semestre: 2 },

  // 5° Año
  { nombre: "Derecho Tributario y Financiero", requisitos: ["Derecho Administrativo"], anio: 5, semestre: 1 },
  { nombre: "Derecho Internacional Público", requisitos: ["Derechos Humanos", "Derecho Procesal II: Proceso Civil y Comercial", "Derecho del Transporte", "Derecho Administrativo", "Derecho Ambiental"], anio: 5, semestre: 1 },

  { nombre: "Derecho Internacional Privado", requisitos: ["Derecho de Familia y de las Sucesiones", "Concursos y Privilegios"], anio: 5, semestre: 2 },

  // 6° Año
  { nombre: "Destrezas V: Práctica Profesional Aplicada", requisitos: ["Derecho de Familia y de las Sucesiones", "Derecho Procesal II: Proceso Civil y Comercial", "Destrezas IV: Habilidades para el Litigio"], anio: 6, semestre: 1 },
];

const estado = {};
materias.forEach((m) => (estado[m.nombre] = false));

function crearBloquesPorSemestre() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  for (let anio = 1; anio <= 6; anio++) {
    for (let semestre = 1; semestre <= 2; semestre++) {
      const bloque = document.createElement("section");
      bloque.className = "semestre";
      const titulo = document.createElement("h2");
      titulo.textContent = `${anio}° Año – ${semestre}° Semestre`;
      bloque.appendChild(titulo);

      const materiasDelBloque = materias.filter(
        (m) => m.anio === anio && m.semestre === semestre
      );

      materiasDelBloque.forEach((materia) => {
        const div = document.createElement("div");
        div.textContent = materia.nombre;
        div.className = "materia";

        const requisitosCumplidos = materia.requisitos.every((r) => estado[r]);
        if (!requisitosCumplidos && !estado[materia.nombre]) {
          div.classList.add("bloqueada");
        } else if (estado[materia.nombre]) {
          div.classList.add("completada");
        }

        div.style.backgroundColor = coloresPorAnio[anio - 1];

        div.onclick = () => {
          if (requisitosCumplidos || estado[materia.nombre]) {
            estado[materia.nombre] = !estado[materia.nombre];
            crearBloquesPorSemestre();
          }
        };

        bloque.appendChild(div);
      });

      container.appendChild(bloque);
    }
  }
}

crearBloquesPorSemestre();
