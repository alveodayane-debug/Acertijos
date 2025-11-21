// Hook personalizado para manejar la lógica del juego

import { useState, useEffect } from 'react'
import { GameState, Puzzle, Room, Category } from '@/types/game'
import { categories } from '@/data/categories'
import { 
  getCompletedPuzzles, 
  getAllCompletedPuzzles, 
  saveCompletedPuzzle,
  formatTime
} from '@/utils/gameUtils'

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    currentCategory: '',
    currentRoom: '',
    unlockedRooms: [],
    hints: 3,
    startTime: Date.now(),
    elapsedTime: 0,
    solvedPuzzles: 0,
    usedPuzzleIds: [],
    sessionCompletedPuzzles: getAllCompletedPuzzles(),
    difficultyNotification: null
  }))

  const [userAnswer, setUserAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null)

  // Obtener datos actuales
  const currentCategory = categories[gameState.currentCategory]
  const currentRoomData = currentCategory?.rooms[gameState.currentRoom]

  // Efecto para el temporizador
  useEffect(() => {
    const timer = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        elapsedTime: Math.floor((Date.now() - prev.startTime) / 1000)
      }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Seleccionar acertijo aleatorio al entrar a una habitación
  useEffect(() => {
    if (currentRoomData && currentRoomData.puzzles.length > 0 && currentRoomData.id !== 'libertad') {
      const availablePuzzles = currentRoomData.puzzles.filter(
        puzzle => !gameState.usedPuzzleIds.includes(puzzle.id)
      )
      
      if (availablePuzzles.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePuzzles.length)
        setCurrentPuzzle(availablePuzzles[randomIndex])
      } else {
        setCurrentPuzzle(currentRoomData.puzzles[0])
      }
    }
  }, [gameState.currentRoom, currentRoomData, gameState.usedPuzzleIds])

  /**
   * Inicia una categoría específica
   */
  const startCategory = (categoryId: string) => {
    const category = categories[categoryId]
    const firstRoom = Object.keys(category.rooms)[0]
    
    setGameState({
      currentCategory: categoryId,
      currentRoom: firstRoom,
      unlockedRooms: [firstRoom],
      hints: 3,
      startTime: Date.now(),
      elapsedTime: 0,
      solvedPuzzles: 0,
      usedPuzzleIds: [],
      sessionCompletedPuzzles: getAllCompletedPuzzles(),
      difficultyNotification: null
    })
    
    resetPuzzleState()
  }

  /**
   * Selecciona un acertijo por dificultad específica
   */
  const selectPuzzleByDifficulty = (categoryId: string, difficulty: 'fácil' | 'medio' | 'difícil') => {
    const category = categories[categoryId]
    const targetRoom = Object.values(category.rooms).find(room => room.difficulty === difficulty)
    
    if (targetRoom) {
      setGameState({
        currentCategory: categoryId,
        currentRoom: targetRoom.id,
        unlockedRooms: [targetRoom.id],
        hints: 3,
        startTime: Date.now(),
        elapsedTime: 0,
        solvedPuzzles: 0,
        usedPuzzleIds: [],
        sessionCompletedPuzzles: getAllCompletedPuzzles(),
        difficultyNotification: `Comenzando en dificultad ${difficulty}`
      })
      
      resetPuzzleState()
      
      // Limpiar notificación después de 3 segundos
      setTimeout(() => {
        setGameState(prev => ({ ...prev, difficultyNotification: null }))
      }, 3000)
    }
  }

  /**
   * Maneja el envío de respuesta
   */
  const handleSubmit = async () => {
    if (!userAnswer.trim() || isProcessing || !currentPuzzle) return

    setIsProcessing(true)
    
    // Simular tiempo de procesamiento
    await new Promise(resolve => setTimeout(resolve, 1000))

    const isCorrect = userAnswer.toLowerCase().trim() === currentPuzzle.answer.toLowerCase().trim()
    setFeedback(isCorrect ? 'correct' : 'incorrect')

    if (isCorrect) {
      saveCompletedPuzzle(gameState.currentCategory, currentPuzzle.id)
      
      setTimeout(() => {
        handleProgression()
      }, 2000)
    }

    setIsProcessing(false)
  }

  /**
   * Maneja la progresión del juego
   */
  const handleProgression = () => {
    const nextRoom = currentRoomData?.nextRoom
    
    if (nextRoom && nextRoom !== 'libertad') {
      advanceToRoom(nextRoom)
    } else if (nextRoom === 'libertad') {
      advanceToVictory()
    } else {
      // Intentar avanzar al siguiente nivel de dificultad
      tryAdvanceDifficulty()
    }
    
    resetPuzzleState()
  }

  /**
   * Avanza a una habitación específica
   */
  const advanceToRoom = (roomId: string) => {
    setGameState(prev => ({
      ...prev,
      currentRoom: roomId,
      unlockedRooms: [...prev.unlockedRooms, roomId],
      solvedPuzzles: prev.solvedPuzzles + 1,
      usedPuzzleIds: [...prev.usedPuzzleIds, currentPuzzle!.id]
    }))
  }

  /**
   * Avanza a la pantalla de victoria
   */
  const advanceToVictory = () => {
    setGameState(prev => ({
      ...prev,
      currentRoom: 'libertad',
      solvedPuzzles: prev.solvedPuzzles + 1,
      usedPuzzleIds: [...prev.usedPuzzleIds, currentPuzzle!.id]
    }))
  }

  /**
   * Intenta avanzar al siguiente nivel de dificultad
   */
  const tryAdvanceDifficulty = () => {
    const category = categories[gameState.currentCategory]
    const currentDifficulty = currentRoomData?.difficulty
    
    let nextDifficultyRoom = null
    let nextDifficultyName = ''
    
    if (currentDifficulty === 'fácil') {
      nextDifficultyRoom = Object.values(category.rooms).find(room => room.difficulty === 'medio')
      nextDifficultyName = 'medio'
    } else if (currentDifficulty === 'medio') {
      nextDifficultyRoom = Object.values(category.rooms).find(room => room.difficulty === 'difícil')
      nextDifficultyName = 'difícil'
    }
    
    if (nextDifficultyRoom) {
      setGameState(prev => ({
        ...prev,
        currentRoom: nextDifficultyRoom.id,
        unlockedRooms: [...prev.unlockedRooms, nextDifficultyRoom.id],
        solvedPuzzles: prev.solvedPuzzles + 1,
        usedPuzzleIds: [...prev.usedPuzzleIds, currentPuzzle!.id],
        difficultyNotification: `¡Felicidades! Avanzando a dificultad ${nextDifficultyName}`
      }))
      
      setTimeout(() => {
        setGameState(prev => ({ ...prev, difficultyNotification: null }))
      }, 3000)
    }
  }

  /**
   * Usa una pista
   */
  const useHint = () => {
    if (gameState.hints > 0 && currentPuzzle) {
      setGameState(prev => ({ ...prev, hints: prev.hints - 1 }))
      setShowHint(true)
    }
  }

  /**
   * Reinicia el juego actual
   */
  const resetGame = () => {
    const category = categories[gameState.currentCategory]
    const firstRoom = Object.keys(category.rooms)[0]
    
    setGameState(prev => ({
      ...prev,
      currentRoom: firstRoom,
      unlockedRooms: [firstRoom],
      hints: 3,
      startTime: Date.now(),
      elapsedTime: 0,
      solvedPuzzles: 0,
      usedPuzzleIds: [],
      difficultyNotification: null
    }))
    
    resetPuzzleState()
  }

  /**
   * Reinicia todo el progreso
   */
  const resetAllProgress = () => {
    resetCompletedPuzzles(gameState.currentCategory)
    resetGame()
  }

  /**
   * Vuelve a la selección de categorías
   */
  const backToCategories = () => {
    setGameState({
      currentCategory: '',
      currentRoom: '',
      unlockedRooms: [],
      hints: 3,
      startTime: Date.now(),
      elapsedTime: 0,
      solvedPuzzles: 0,
      usedPuzzleIds: [],
      sessionCompletedPuzzles: getAllCompletedPuzzles(),
      difficultyNotification: null
    })
    
    resetPuzzleState()
  }

  /**
   * Reinicia el estado de los acertijos
   */
  const resetPuzzleState = () => {
    setUserAnswer('')
    setShowHint(false)
    setFeedback(null)
    setCurrentPuzzle(null)
  }

  // Calcular progreso
  const progressPercentage = currentCategory 
    ? (gameState.solvedPuzzles / (Object.keys(currentCategory.rooms).length - 1)) * 100 
    : 0

  const totalUniqueCompleted = gameState.sessionCompletedPuzzles[gameState.currentCategory]?.length || 0
  const totalPuzzlesInCategory = currentCategory 
    ? Object.values(currentCategory.rooms).reduce((acc, room) => acc + room.puzzles.length, 0) - 1 
    : 0

  return {
    // Estado
    gameState,
    userAnswer,
    setUserAnswer,
    showHint,
    setShowHint,
    feedback,
    setFeedback,
    isProcessing,
    showPassword,
    setShowPassword,
    currentPuzzle,
    currentCategory,
    currentRoomData,
    progressPercentage,
    totalUniqueCompleted,
    totalPuzzlesInCategory,
    
    // Acciones
    startCategory,
    selectPuzzleByDifficulty,
    handleSubmit,
    useHint,
    resetGame,
    resetAllProgress,
    backToCategories,
    formatTime
  }
}