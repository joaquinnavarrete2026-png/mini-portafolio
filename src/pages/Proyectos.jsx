import TarjetaProyecto from '../components/TarjetaProyecto';

export default function Proyectos() {
  const listaProyectos = [
    {
      titulo: "Mini-Portafolio Web",
      descripcion: "Aplicación web modular desarrollada con React, Vite y Tailwind CSS, implementando enrutamiento con React Router, componentes reutilizables y validación de formularios.",
      tecnologias: ["React", "Vite", "Tailwind CSS", "React Router"],
      enlace: "https://github.com/Dexa-T91"
    },
    {
      titulo: "Analizador de Límites Matemáticos",
      descripcion: "Herramienta de escritorio interactiva desarrollada en Python utilizando CustomTkinter, SymPy y Matplotlib para el análisis y representación gráfica de límites.",
      tecnologias: ["Python", "CustomTkinter", "SymPy", "Matplotlib"],
      enlace: "https://github.com/Dexa-T91"
    },
    {
      titulo: "Plataforma Turística (Base de Datos)",
      descripcion: "Diseño y modelado de base de datos relacional en MySQL con 10 tablas, vistas complejas y procedimientos almacenados gestionados a través de phpMyAdmin.",
      tecnologias: ["MySQL", "phpMyAdmin", "SQL", "Modelado ER"],
      enlace: "https://github.com/Dexa-T91"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Proyectos Destacados</h1>
        <p className="text-gray-600 mt-1">Una selección de mis trabajos y desarrollos recientes.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listaProyectos.map((proyecto, index) => (
          <TarjetaProyecto
            key={index}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </div>
  );
}