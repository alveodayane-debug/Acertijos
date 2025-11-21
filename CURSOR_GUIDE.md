# Escape Room Mágico - Guía Rápida para Cursor

## 📋 Estructura del Código (Optimizada para Cursor)

### Archivos Principales

```
src/
├── app/page.tsx              # 🏠 Componente principal - Punto de entrada
├── components/
│   ├── CategorySelection.tsx # 📋 Selección de categorías
│   ├── GameBoard.tsx        # 🎮 Tablero de juego principal
│   └── VictoryScreen.tsx    # 🏆 Pantalla de victoria
├── hooks/useGameState.ts    # 🎯 Lógica central del juego
├── data/categories.ts       # 📚 Todos los datos del juego
├── types/game.ts           # 📝 Definiciones TypeScript
└── utils/gameUtils.ts      # 🛠️ Funciones utilitarias
```

## 🎯 Flujo de Desarrollo

### 1. Para modificar acertijos o categorías:
```typescript
// Ir a: src/data/categories.ts
// Buscar la categoría y modificar los puzzles
puzzles: [
  {
    id: 'ID_ÚNICO',
    question: 'Pregunta del acertijo',
    answer: 'respuesta_correcta',
    hint: 'Pista para el jugador'
  }
]
```

### 2. Para agregar nueva categoría:
```typescript
// En src/data/categories.ts, agregar al objeto categories:
nombreCategoria: {
  id: 'nombreCategoria',
  name: 'Nombre para mostrar',
  description: 'Descripción breve',
  icon: <IconoComponent className="w-6 h-6" />,
  color: 'bg-color-500',
  gradient: 'from-color-900 via-color-800 to-other-color-900',
  rooms: { /* habitaciones aquí */ }
}
```

### 3. Para modificar la lógica del juego:
```typescript
// Ir a: src/hooks/useGameState.ts
// Funciones principales:
// - handleSubmit(): Procesa respuestas
// - handleProgression(): Maneja el avance
// - tryAdvanceDifficulty(): Controla la progresión automática
```

### 4. Para modificar la interfaz:
```typescript
// Componentes principales:
// - CategorySelection.tsx: Pantalla inicial
// - GameBoard.tsx: Interfaz de juego
// - VictoryScreen.tsx: Pantalla final
```

## 🔍 Búsquedas Útiles en Cursor

### Encontrar acertijos específicos:
```
"question:" "answer:" "hint:"
```

### Encontrar lógica de dificultad:
```
"difficulty:" "fácil" "medio" "difícil"
```

### Encontrar funciones de estado:
```
"const handle" "useState" "useEffect"
```

### Encontrar componentes UI:
```
"className=" "motion.div" "Button"
```

## 🎨 Personalización Rápida

### Cambiar colores principales:
```typescript
// En cada categoría en categories.ts:
color: 'bg-TU_COLOR-500',
gradient: 'from-TU_COLOR-900 via-TU_COLOR-800 to-OTRO_COLOR-900'
```

### Modificar número de pistas:
```typescript
// En useGameState.ts, buscar:
hints: 3  // Cambiar este número
```

### Ajustar tiempo de animaciones:
```typescript
// Buscar "duration:" en los componentes motion.div
duration: 0.3  // Ajustar este valor
```

## 🐛 Depuración Común

### Problema: Los acertijos no se guardan
```typescript
// Verificar en gameUtils.ts:
// Función saveCompletedPuzzle() está funcionando
// localStorage está disponible
```

### Problema: La progresión automática no funciona
```typescript
// Verificar en useGameState.ts:
// Función tryAdvanceDifficulty()
// nextRoom está configurado correctamente
```

### Problema: Las animaciones no se ven
```typescript
// Verificar que Framer Motion esté importado:
import { motion } from 'framer-motion'
```

## 🚀 Atajos de Cursor

### Cmd/Ctrl + Click: Ir a definición
### Cmd/Ctrl + Shift + F: Buscar en todo el proyecto
### Cmd/Ctrl + P: Buscar archivos rápidamente
### Cmd/Ctrl + /: Comentar/descomentar líneas

## 📝 Patrones de Código

### Estructura de un componente:
```typescript
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// ... otros imports

interface Props {
  // Definir props aquí
}

export const ComponentName = ({ prop1, prop2 }: Props) => {
  // Lógica del componente
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // ... más animaciones
    >
      {/* JSX aquí */}
    </motion.div>
  )
}
```

### Estructura de un hook personalizado:
```typescript
import { useState, useEffect } from 'react'

export const useHookName = () => {
  const [state, setState] = useState(initialValue)
  
  // Lógica del hook
  
  return {
    // Exponer estado y funciones
    state,
    setState,
    // ... otras funciones
  }
}
```

## 🎮 Lógica Central del Juego

### Flujo principal:
1. **page.tsx** → Componente principal
2. **useGameState** → Maneja toda la lógica
3. **components** → Renderizan la UI
4. **data** → Proporciona los datos del juego

### Estados importantes:
- `gameState`: Estado global del juego
- `currentPuzzle`: Acertijo actual
- `userAnswer`: Respuesta del usuario
- `feedback`: Retroalimentación (correcto/incorrecto)

## 🔧 Configuración Rápida

### Para cambiar el título del juego:
```typescript
// En CategorySelection.tsx:
<h1>Escape Room Mágico</h1> // Cambiar este texto
```

### Para modificar el número de categorías:
```typescript
// En page.tsx, en el return:
if (showCategorySelection) {
  return <CategorySelection ... />
}
```

### Para agregar nuevos niveles de dificultad:
```typescript
// En types/game.ts:
difficulty: 'fácil' | 'medio' | 'difícil' | 'nuevo_nivel'

// En gameUtils.ts:
case 'nuevo_nivel': return 'bg-TU_COLOR-500 hover:bg-TU_COLOR-600'
```

---

**💡 Tip**: Usa la búsqueda de Cursor (Cmd/Ctrl + Shift + F) para encontrar rápidamente cualquier parte del código.