/**
 * Escape Room Mágico - Juego de acertijos por categorías
 * 
 * Este es un juego interactivo de escape room donde los jugadores resuelven acertijos
 * para progresar a través de diferentes habitaciones y niveles de dificultad.
 * 
 * Características principales:
 * - 5 categorías temáticas con acertijos únicos
 * - Sistema de dificultad progresiva (Fácil → Medio → Difícil)
 * - Progresión automática entre niveles
 * - Sistema de pistas y temporizador
 * - Guardado de progreso local
 * - Interfaz responsive y moderna
 * 
 * Estructura del proyecto:
 * - /types/game.ts - Definiciones de tipos TypeScript
 * - /data/categories.ts - Datos del juego (categorías, habitaciones, acertijos)
 * - /utils/gameUtils.ts - Utilidades y funciones de almacenamiento
 * - /hooks/useGameState.ts - Hook personalizado para la lógica del juego
 * - /components/ - Componentes UI modulares
 * 
 * @author Escape Room Mágico
 * @version 2.0.0
 */

'use client'

import { useState } from 'react'
import { CategorySelection } from '@/components/CategorySelection'
import { GameBoard } from '@/components/GameBoard'
import { VictoryScreen } from '@/components/VictoryScreen'
import { useGameState } from '@/hooks/useGameState'
import { getDifficultyColor } from '@/utils/gameUtils'

/**
 * Componente principal del juego
 * 
 * Maneja el flujo completo del juego:
 * 1. Selección de categoría y dificultad
 * 2. Gameplay principal
 * 3. Pantalla de victoria
 */
export default function Home() {
  const [showCategorySelection, setShowCategorySelection] = useState(true)
  
  // Hook personalizado que contiene toda la lógica del juego
  const {
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
    
    // Acciones del juego
    startCategory,
    selectPuzzleByDifficulty,
    handleSubmit,
    useHint,
    resetGame,
    resetAllProgress,
    backToCategories,
    formatTime
  } = useGameState()

  /**
   * Maneja el inicio de una categoría
   * Oculta la selección de categorías y comienza el juego
   */
  const handleStartCategory = (categoryId: string) => {
    startCategory(categoryId)
    setShowCategorySelection(false)
  }

  /**
   * Maneja la selección de dificultad específica
   * Oculta la selección de categorías y comienza el juego en la dificultad elegida
   */
  const handleSelectDifficulty = (categoryId: string, difficulty: 'fácil' | 'medio' | 'difícil') => {
    selectPuzzleByDifficulty(categoryId, difficulty)
    setShowCategorySelection(false)
  }

  /**
   * Maneja el regreso a la selección de categorías
   * Muestra la pantalla de selección y reinicia el estado del juego
   */
  const handleBackToCategories = () => {
    setShowCategorySelection(true)
    backToCategories()
  }

  // ======================
  // RENDERIZADO CONDICIONAL
  // ======================

  // 1. Pantalla de selección de categorías
  if (showCategorySelection) {
    return (
      <CategorySelection
        sessionCompletedPuzzles={gameState.sessionCompletedPuzzles}
        onStartCategory={handleStartCategory}
        onSelectDifficulty={handleSelectDifficulty}
      />
    )
  }

  // 2. Pantalla de victoria
  if (gameState.currentRoom === 'libertad') {
    return (
      <VictoryScreen
        currentRoomData={currentRoomData}
        elapsedTime={gameState.elapsedTime}
        solvedPuzzles={gameState.solvedPuzzles}
        onResetGame={resetGame}
        onResetAllProgress={resetAllProgress}
        onBackToCategories={handleBackToCategories}
        formatTime={formatTime}
      />
    )
  }

  // 3. Pantalla principal del juego
  return (
    <GameBoard
      gameState={gameState}
      currentCategory={currentCategory}
      currentRoomData={currentRoomData}
      currentPuzzle={currentPuzzle}
      userAnswer={userAnswer}
      setUserAnswer={setUserAnswer}
      showHint={showHint}
      setShowHint={setShowHint}
      feedback={feedback}
      isProcessing={isProcessing}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      progressPercentage={progressPercentage}
      totalUniqueCompleted={totalUniqueCompleted}
      totalPuzzlesInCategory={totalPuzzlesInCategory}
      onSubmit={handleSubmit}
      onUseHint={useHint}
      onBackToCategories={handleBackToCategories}
      formatTime={formatTime}
      getDifficultyColor={getDifficultyColor}
    />
  )
}