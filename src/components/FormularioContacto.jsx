import { useState } from 'react';

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido.';
    }
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio.';

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listaErrores = validar();

    if (Object.keys(listaErrores).length > 0) {
      setErrores(listaErrores);
    } else {
      setErrores({});
      setEnviado(true);
      setFormData({ nombre: '', correo: '', mensaje: '' });
      setTimeout(() => setEnviado(false), 5000);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
      {enviado && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center font-medium">
          ¡Gracias por tu mensaje! Me pondré en contacto contigo muy pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errores.nombre ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {errores.nombre && <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errores.correo ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {errores.correo && <p className="text-red-500 text-xs mt-1">{errores.correo}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
          <textarea
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errores.mensaje ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          ></textarea>
          {errores.mensaje && <p className="text-red-500 text-xs mt-1">{errores.mensaje}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}