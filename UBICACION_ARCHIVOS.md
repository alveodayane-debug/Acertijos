# 📁 Ubicación de Archivos - Escape Room Mágico

## 🎮 Página Principal (Inicio del Juego)

### Archivo Principal
**📄 `src/app/page.tsx`**
- Es el componente principal de la página de inicio
- Maneja el flujo completo del juego
- Líneas 1-158: Contiene toda la lógica del juego

### Componente de Selección de Categorías
**📄 `src/components/CategorySelection.tsx`**
- Muestra las categorías bonitas con colores y gradientes
- Líneas 1-183: Componente completo con todas las categorías visibles
- Aquí están todos los estilos, gradientes y colores de las categorías

### Datos de Categorías
**📄 `src/data/categories.tsx`**
- Contiene todas las categorías con sus colores y configuraciones
- Líneas donde están los colores:
  - `clasico`: línea 22-23 (purple)
  - `naturaleza`: línea 212-213 (green)
  - `espacio`: línea 369-370 (blue)
  - `tiempo`: línea 493-494 (orange)
  - Y más categorías...

## 🎯 Dashboard Interactivo

### Dashboard Principal
**📄 `public/interactive-dashboard.html`**
- Dashboard completo con todas las funciones
- Líneas importantes:
  - **Header** (líneas 178-248): Botones de navegación y acceso directo
  - **Botón "¡JUGAR AHORA!"** (línea ~250): Acceso directo a la página principal
  - **Tabs de navegación** (línea ~265): Pestañas del dashboard
  - **Función goToHome()** (línea ~1700): Función que redirige a la página principal

### Función de Navegación
**📄 `public/interactive-dashboard.html`**
- Busca la función `goToHome()` alrededor de la línea 1700
- Esta función te redirige a la página principal del juego

## 🎨 Estilos y Colores

### Colores de Categorías (en `src/data/categories.tsx`)
Cada categoría tiene:
- `color`: Color principal (ej: `bg-purple-500`)
- `gradient`: Gradiente de fondo (ej: `from-purple-900 via-purple-800 to-indigo-900`)

### Estilos del Dashboard
- Estilos inline en `public/interactive-dashboard.html`
- Usa Tailwind CSS para los estilos

## 🔗 Enlaces entre Páginas

### Desde Dashboard a Página Principal
- **Botón grande**: "¡JUGAR AHORA!" (arriba del dashboard)
- **Botón header**: "Ir a Jugar" (en el header derecho)
- **Logo clickeable**: Haciendo clic en el avatar/nombre del usuario

### Desde Página Principal a Dashboard
- **Botón**: "🎮 Dashboard Interactivo" (arriba a la derecha)

## 📍 Resumen Rápido

```
📦 Proyecto
├── 📄 src/app/page.tsx                    ← Página principal del juego
├── 📄 src/components/CategorySelection.tsx ← Componente bonito de categorías
├── 📄 src/data/categories.tsx             ← Datos y colores de categorías
└── 📄 public/interactive-dashboard.html   ← Dashboard completo
```

## 🎯 Accesos Directos

1. **Desde Dashboard → Página Principal**:
   - Botón grande "¡JUGAR AHORA!" (centrado arriba)
   - Botón "Ir a Jugar" (header derecho)
   - Click en logo/nombre del usuario

2. **Desde Página Principal → Dashboard**:
   - Botón "🎮 Dashboard Interactivo" (arriba derecha)

## 💡 Notas

- Todos los archivos están en la raíz del proyecto `acertijooouuu`
- Los componentes React están en `src/`
- El dashboard HTML estático está en `public/`
- Los colores y gradientes están configurados en `src/data/categories.tsx`

