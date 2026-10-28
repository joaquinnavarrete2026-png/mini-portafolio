import fotoPerfil from '../assets/perfil.jpg'; // Cambia 'perfil.jpg' por el nombre real de tu archivo

export default function SobreMi() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Sobre mí</h1>
        <p className="text-gray-600 mt-1">Conoce un poco más sobre mi trayectoria y motivaciones.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-1 text-center flex flex-col items-center">
          {/* Imagen importada desde src/assets/ adaptada al círculo */}
          <img
            src={fotoPerfil}
            alt="Joaquín Navarrete"
            className="w-28 h-28 rounded-full object-cover shadow-md mb-4 border-2 border-blue-600"
          />
          <h3 className="font-bold text-gray-900 text-lg">Joaquín Navarrete</h3>
          <p className="text-sm text-gray-500 mt-1">Temuco, Chile</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
          <p>
            ¡Hola! Actualmente curso la carrera de <strong>Ingeniería Civil en Informática</strong> en la Universidad Católica de Temuco. Me apasiona el desarrollo de software, la creación de herramientas de escritorio interactivas y el diseño de interfaces web modernas.
          </p>
          <p>
            A lo largo de mi formación académica y proyectos personales, he trabajado con un stack tecnológico diverso que abarca desde Python y bases de datos relacionales hasta el desarrollo frontend moderno con React, JavaScript y Tailwind CSS.
          </p>
          <p>
            Disfruto resolviendo problemas lógicos, optimizando flujos de trabajo y construyendo aplicaciones intuitivas que ofrezcan una gran experiencia de usuario.
          </p>
        </div>
      </div>
    </div>
  );
}