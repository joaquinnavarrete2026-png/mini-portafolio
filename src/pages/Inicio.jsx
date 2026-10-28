import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="py-12 md:py-20 flex flex-col items-center text-center">
      <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        Estudiante de Ingeniería Civil en Informática
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
        Hola, soy <span className="text-blue-600">Joaquín Navarrete</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed">
        Desarrollador frontend junior enfocado en crear experiencias web interactivas, limpias y funcionales utilizando tecnologías modernas como React, Vite y Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/proyectos"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-colors"
        >
          Ver mis proyectos
        </Link>
        <Link
          to="/contacto"
          className="bg-white hover:bg-gray-50 text-gray-800 font-medium px-6 py-3 rounded-lg border border-gray-300 shadow-sm transition-colors"
        >
          Contáctame
        </Link>
      </div>
    </div>
  );
}