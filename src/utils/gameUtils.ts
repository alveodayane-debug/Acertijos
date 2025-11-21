// Utilidades para manejar el almacenamiento local del juego

import { GameState } from '@/types/game'

/**
 * Obtiene los acertijos completados de una categoría específica
 */
export const getCompletedPuzzles = (category: string): string[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`escapeRoom_completedPuzzles_${category}`)
    return stored ? JSON.parse(stored) : []
  }
  return []
}

/**
 * Obtiene todos los acertijos completados de todas las categorías
 */
export const getAllCompletedPuzzles = (): Record<string, string[]> => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('escapeRoom_allCompletedPuzzles')
    return stored ? JSON.parse(stored) : {}
  }
  return {}
}

/**
 * Guarda un acertijo como completado
 */
export const saveCompletedPuzzle = (category: string, puzzleId: string) => {
  if (typeof window !== 'undefined') {
    const completed = getCompletedPuzzles(category)
    if (!completed.includes(puzzleId)) {
      completed.push(puzzleId)
      localStorage.setItem(`escapeRoom_completedPuzzles_${category}`, JSON.stringify(completed))
      
      // También guardar en el rastreador global
      const allCompleted = getAllCompletedPuzzles()
      if (!allCompleted[category]) {
        allCompleted[category] = []
      }
      if (!allCompleted[category].includes(puzzleId)) {
        allCompleted[category].push(puzzleId)
        localStorage.setItem('escapeRoom_allCompletedPuzzles', JSON.stringify(allCompleted))
      }
    }
  }
}

/**
 * Reinicia los acertijos completados de una categoría
 */
export const resetCompletedPuzzles = (category: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(`escapeRoom_completedPuzzles_${category}`)
  }
}

/**
 * Reinicia todo el progreso del juego
 */
export const resetAllCompletedPuzzles = () => {
  if (typeof window !== 'undefined') {
    const categories = ['clasico', 'naturaleza', 'tecnologia', 'cocina', 'fantasia', 'espacio', 'historia', 'deportes', 'musica', 'ciencia']
    categories.forEach(cat => {
      localStorage.removeItem(`escapeRoom_completedPuzzles_${cat}`)
    })
    localStorage.removeItem('escapeRoom_allCompletedPuzzles')
  }
}

/**
 * Formatea el tiempo en formato MM:SS
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/**
 * Obtiene el color según la dificultad
 */
export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'fácil': return 'bg-green-500 hover:bg-green-600'
    case 'medio': return 'bg-yellow-500 hover:bg-yellow-600'
    case 'difícil': return 'bg-red-500 hover:bg-red-600'
    default: return 'bg-gray-500 hover:bg-gray-600'
  }
}