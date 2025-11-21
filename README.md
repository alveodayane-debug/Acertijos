# Escape Room Mágico

Un juego interactivo de escape room construido con Next.js 15, TypeScript y Tailwind CSS.

## 🎮 Características

- **5 Categorías Temáticas**: Misterio Clásico, Mundo Natural, Era Digital, Misterios Culinarios, Reino Mágico
- **Sistema de Dificultad Progresiva**: Fácil → Medio → Difícil (avance automático)
- **Sistema de Pistas**: 3 pistas por partida
- **Temporizador**: Mide el tiempo de resolución
- **Progreso Guardado**: Se guarda el progreso localmente
- **Interfaz Responsiva**: Funciona en móviles y escritorio
- **Animaciones Fluidas**: Hechas con Framer Motion

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   └── page.tsx              # Componente principal del juego
├── components/
│   ├── CategorySelection.tsx # Pantalla de selección de categorías
│   ├── GameBoard.tsx        # Tablero de juego principal
│   └── VictoryScreen.tsx    # Pantalla de victoria
├── data/
│   └── categories.ts        # Datos del juego (categorías, acertijos)
├── hooks/
│   └── useGameState.ts      # Hook personalizado con la lógica del juego
├── types/
│   └── game.ts              # Definiciones de tipos TypeScript
└── utils/
    └── gameUtils.ts         # Utilidades y funciones de almacenamiento
```

## 🚀 Cómo Empezar

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm start
```

## 🎯 Cómo Jugar

1. **Selecciona una categoría**: Elige entre las 5 categorías disponibles
2. **Elige la dificultad**: Comienza en Fácil, Medio o Difícil
3. **Resuelve los acertijos**: Lee cada acertijo y escribe tu respuesta
4. **Usa pistas si es necesario**: Tienes 3 pistas por partida
5. **Avanza automáticamente**: El juego aumenta la dificultad al completar niveles
6. **Completa todos los niveles**: Llega a la pantalla de libertad

## 🎨 Personalización

### Agregar Nueva Categoría

1. **Define la categoría en `/data/categories.ts`**:
```typescript
miCategoria: {
  id: 'miCategoria',
  name: 'Mi Categoría',
  description: 'Descripción de mi categoría',
  icon: <MiIcono className="w-6 h-6" />,
  color: 'bg-purple-500',
  gradient: 'from-purple-900 via-purple-800 to-indigo-900',
  rooms: {
    // Define tus habitaciones aquí
  }
}
```

2. **Agrega habitaciones y acertijos**:
```typescript
miHabitacion: {
  id: 'miHabitacion',
  name: 'Mi Habitación',
  description: 'Descripción de la habitación',
  puzzles: [
    {
      id: 'mi_acertijo_1',
      question: '¿Qué soy?',
      answer: 'respuesta',
      hint: 'Pista para el acertijo'
    }
  ],
  nextRoom: 'siguiente_habitacion',
  difficulty: 'fácil'
}
```

### Modificar Dificultades

Las dificultades se definen en el campo `difficulty` de cada habitación:
- `'fácil'` - Acertijos sencillos
- `'medio'` - Acertijos intermedios  
- `'difícil'` - Acertijos complejos

### Personalizar Colores

Modifica los gradientes y colores en la definición de cada categoría:
```typescript
color: 'bg-purple-500',                    // Color principal
gradient: 'from-purple-900 via-purple-800 to-indigo-900' // Gradiente de fondo
```

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para este proyecto.

### Dependencias Principales

- **Next.js 15**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos
- **Framer Motion**: Animaciones
- **Lucide React**: Iconos
- **shadcn/ui**: Componentes UI

## 🎮 Lógica del Juego

### Flujo del Juego

1. **Selección**: El jugador elige categoría y dificultad
2. **Gameplay**: Resuelve acertijos para avanzar
3. **Progresión**: Avance automático entre niveles de dificultad
4. **Victoria**: Pantalla final con estadísticas

### Sistema de Progresión

- **Progresión Horizontal**: Dentro de una misma dificultad
- **Progresión Vertical**: Entre niveles de dificultad (automática)
- **Progresión Global**: Entre diferentes categorías

### Almacenamiento

El progreso se guarda en `localStorage`:
- `escapeRoom_completedPuzzles_{categoria}`: Acertijos completados por categoría
- `escapeRoom_allCompletedPuzzles`: Todos los acertijos completados

## 🐛 Depuración

### Ver Progreso Guardado
```javascript
// En la consola del navegador
localStorage.getItem('escapeRoom_allCompletedPuzzles')
```

### Reiniciar Progreso
```javascript
// En la consola del navegador
localStorage.clear()
```

### Ver Estado Actual
Usa React DevTools para inspeccionar el estado del componente `useGameState`.

## 📱 Optimización para Móviles

- Diseño responsive con Tailwind CSS
- Controles táctiles optimizados
- Animaciones optimizadas para dispositivos móviles
- Tamaño de fuente adaptable

## 🎨 Tema y Estilos

### Tema Oscuro
El juego usa un tema oscuro con gradientes púrpuras para crear una atmósfera misteriosa.

### Colores de Dificultad
- **Fácil**: Verde (`bg-green-500`)
- **Medio**: Amarillo (`bg-yellow-500`)
- **Difícil**: Rojo (`bg-red-500`)

### Efectos Visuales
- Glassmorphism con `backdrop-blur`
- Animaciones suaves con Framer Motion
- Efectos hover interactivos
- Partículas animadas de fondo

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
# Sube a Vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta /out a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

MIT License - puedes usar este proyecto para fines comerciales y personales.

## 🎯 Ideas Futuras

- [ ] Modo multijugador online
- [ ] Editor de acertijos personalizado
- [ ] Sistema de logros y trofeos
- [ ] Modo contrarreloj
- [ ] Acertijos de audio y video
- [ ] Integración con API de IA para generar acertijos dinámicamente

---

**¡Diviértete jugando!** 🎮✨