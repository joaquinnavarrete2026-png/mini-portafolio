import FormularioContacto from '../components/FormularioContacto';

export default function Contacto() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contacto</h1>
        <p className="text-gray-600">¿Tienes alguna pregunta o propuesta? ¡Me encantaría saber de ti!</p>
      </div>
      <FormularioContacto />
    </div>
  );
}