import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Mi Portafolio
        </Link>
        <nav className="flex space-x-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <Link to="/sobre-mi" className="hover:text-blue-600 transition-colors">Sobre mí</Link>
          <Link to="/habilidades" className="hover:text-blue-600 transition-colors">Habilidades</Link>
          <Link to="/proyectos" className="hover:text-blue-600 transition-colors">Proyectos</Link>
          <Link to="/contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}