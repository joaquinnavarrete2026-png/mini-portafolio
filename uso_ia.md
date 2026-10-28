---

#### Archivo `uso_ia.md`[cite: 2, 4]
```markdown
# Declaración de Uso de Inteligencia Artificial

## 1. IA usada
Se utilizó **Gemini (Google)** como asistente de desarrollo frontend.

## 2. Modelo
Google Gemini 2.5.

## 3. Prompts realizados
- "Generar componentes modularizados en React con React Router para un mini portafolio."
- "Crear un formulario de contacto funcional con validación de campos vacíos y formato de correo utilizando useState."
- "Estructurar las páginas principales siguiendo el esquema de diseño (wireframe) establecido."

## 4. Outputs
- Código en React para los componentes `Header`, `Footer`, `Layout`, `TarjetaProyecto` y `FormularioContacto`.
- Código de las cinco páginas principales (`Inicio`, `SobreMi`, `Habilidades`, `Proyectos`, `Contacto`).
- Plantilla base para los archivos `README.md` y `uso_ia.md`.

## 5. Ajustes
- Se adaptaron los datos personales (nombre, carrera y universidad) para que coincidan con la información real.
- Se ajustó el orden de las pestañas en la barra de navegación para asegurar que "Habilidades" quede antes de "Proyectos".
- Se ajustaron las clases de Tailwind CSS para garantizar la adaptabilidad responsive y el diseño exacto pedido en las pautas.

## 6. Reflexión crítica
El uso de IA aceleró significativamente la estructuración inicial de componentes y la lógica de validación de formularios. Sin embargo, fue fundamental revisar detalladamente las rutas, asegurar que los nombres de los componentes y las props coincidieran correctamente, y verificar que no quedaran textos de relleno o incoherencias según la pauta de evaluación.

----

# Registro de Uso de Inteligencia Artificial (uso_ia.md)

Este proyecto integró el uso de Inteligencia Artificial como asistente de desarrollo y co-piloto técnico para agilizar la toma de decisiones y la resolución de problemas durante las siguientes fases:

## 1. Áreas de Asistencia
* **Arquitectura Modular:** Guía en la separación de responsabilidades entre la carpeta `src/pages/` (vistas de rutas) y `src/components/` (`Header`, `Footer`, `Layout`, `TarjetaProyecto`).
* **Enrutamiento y Vistas:** Configuración inicial de `react-router-dom` para soportar la navegación fluida entre las 5 secciones requeridas (Inicio, Sobre mí, Habilidades, Proyectos y Contacto).
* **Gestión de Estilos y Configuración CSS:** Resolución de conflictos de compilación en Vite, actualización al ecosistema y directivas de **Tailwind CSS v4** (`@import "tailwindcss";`), así como la configuración de PostCSS y dependencias asociadas.
* **Componentes Interactivos y Multimedia:** Implementación de tarjetas dinámicas mediante props, validación reactiva en el formulario de contacto y adaptación estilizada de la imagen de perfil almacenada en `src/assets/` mediante clases utilitarias (`rounded-full`, `object-cover`).
* **Documentación:** Elaboración de las guías técnicas obligatorias para la entrega del mini-portafolio.

## 2. Criterio y Autoría
Todo el código y las configuraciones sugeridas fueron validados, probados localmente e integrados por el estudiante, asegurando la comprensión completa de la estructura implementada y el cumplimiento de los estándares exigidos por la rúbrica universitaria.