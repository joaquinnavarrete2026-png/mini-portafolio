export default function TarjetaProyecto({ titulo, descripcion, tecnologias, enlace }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{titulo}</h3>
        <p className="text-gray-600 text-sm mb-4">{descripcion}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tecnologias.map((tech, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {enlace && (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center bg-gray-900 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Ver repositorio / proyecto
        </a>
      )}
    </div>
  );
}