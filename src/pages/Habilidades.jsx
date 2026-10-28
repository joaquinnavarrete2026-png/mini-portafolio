export default function Habilidades() {
  const habilidades = [
    { categoria: "Frontend", items: ["React", "Angular Standalone", "Ionic", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { categoria: "Backend y Bases de Datos", items: ["Python (FastAPI, Pygame, SymPy)", "MySQL", "phpMyAdmin", "SQL"] },
    { categoria: "Herramientas y Entorno", items: ["Git", "GitHub", "Visual Studio Code", "PowerShell", "Postman", "Windows 11"] },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Habilidades y Tecnologías</h1>
        <p className="text-gray-600 mt-1">Las herramientas y lenguajes que utilizo en mis desarrollos.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {habilidades.map((grupo, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-lg font-bold text-blue-600 mb-4 pb-2 border-b border-gray-100">
              {grupo.categoria}
            </h3>
            <ul className="space-y-2 flex-grow">
              {grupo.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700 text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}