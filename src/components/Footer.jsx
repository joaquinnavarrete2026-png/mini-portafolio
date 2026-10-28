export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Mini-Portafolio. Desarrollado con React, Vite y Tailwind CSS.</p>
      </div>
    </footer>
  );
}