# Plan de Validación del Formulario

Este documento detalla el plan para implementar la validación del formulario de registro, mostrando mensajes e iconos de error cuando los campos se envían vacíos o con formato incorrecto.

## Archivos Relevantes

*   `index.html`: Contiene la estructura HTML del formulario, incluyendo los inputs, spans para mensajes de error e iconos.
*   `JS/main.js`: Contendrá la lógica JavaScript para la validación.
*   `Css/styles.css`: Contiene los estilos necesarios para mostrar/ocultar errores y aplicar estilos a los inputs inválidos (se asume que ya existen).

## Plan Detallado

1.  **Selección de Elementos:**
    *   Dentro del `DOMContentLoaded`, seleccionar:
        *   El formulario (`#formulario`).
        *   Inputs: `#name`, `#lastname`, `#email`, `#password`.
        *   Mensajes de error: `#nameError`, `#LastnameError`, `#emailError`, `#passwordError`.
        *   Contenedores de iconos de error (ej. `.error-icon` dentro de cada `.form__input`).

2.  **Lógica de Validación (dentro del Event Listener `submit`):**
    *   **Resetear Errores:** Al inicio del manejador `submit`:
        *   Ocultar todos los mensajes de error (`display: none`).
        *   Ocultar todos los iconos de error (`display: none`).
        *   Eliminar la clase `input-error` de todos los inputs.
    *   **Obtener y Limpiar Valores:** Obtener el valor de cada input usando `.value.trim()`.
    *   **Validación Campo por Campo:**
        *   Inicializar `let hasError = false;`.
        *   **Name, Lastname, Password:** Si `valor.trim() === ''`:
            *   Mostrar mensaje de error correspondiente (`display: block`).
            *   Mostrar icono de error correspondiente (`display: block`).
            *   Añadir clase `input-error` al input.
            *   `hasError = true;`.
        *   **Email:**
            *   Si `valor.trim() === ''`: Marcar error (como arriba).
            *   Si no está vacío, validar formato (ej. `!/^\S+@\S+\.\S+$/.test(valor)`): Si es inválido, marcar error (mensaje específico de email).
            *   Si hay error: `hasError = true;`.
    *   **Acción Final:**
        *   Si `hasError` es `true`: No hacer nada más (el `preventDefault` detiene el envío).
        *   Si `hasError` es `false`: Proceder con el envío (guardar en `localStorage`, redirigir, etc.).

## Visualización del Flujo (Diagrama Mermaid)

```mermaid
graph TD
    A[Inicio: Submit Event] --> B(Seleccionar Elementos);
    B --> C[Resetear Errores (Ocultar Mensajes/Iconos, Quitar Clases)];
    C --> D{Obtener Valores Inputs (.trim())};
    D --> E{Validar Name Vacío?};
    E -- Sí --> F[Mostrar Error Name + Icono + Clase Input];
    E -- No --> G{Validar Lastname Vacío?};
    F --> G;
    G -- Sí --> H[Mostrar Error Lastname + Icono + Clase Input];
    G -- No --> I{Validar Email Vacío o Inválido?};
    H --> I;
    I -- Sí --> J[Mostrar Error Email + Icono + Clase Input];
    I -- No --> K{Validar Password Vacío?};
    J --> K;
    K -- Sí --> L[Mostrar Error Password + Icono + Clase Input];
    K -- No --> M{Hubo algún error? (hasError)};
    L --> M;
    M -- Sí --> N[Fin: No hacer nada (preventDefault)];
    M -- No --> O[Procesar Formulario (localStorage, Redirigir)];
    O --> P[Fin: Formulario Enviado];