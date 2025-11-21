'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { motion } from 'framer-motion'
import { Clock, Lightbulb, AlertTriangle, Key, DoorOpen, Eye, EyeOff, Trophy, Home, Star, Zap } from 'lucide-react'
import { memo, useMemo, useCallback } from 'react'
import { useGameState } from '@/hooks/useGameState'

export const GameBoard = memo(() => {
  const {
    gameState,
    currentCategory,
    currentRoom,
    showHint,
    userAnswer,
    feedback,
    isCorrect,
    setUserAnswer,
    checkAnswer,
    getCurrentPuzzle,
    useHint,
    resetGame,
    switchCategory,
    getLevelProgress,
    getDifficultyColor
  } = useGameState()

  const currentPuzzle = getCurrentPuzzle()
  const levelProgress = getLevelProgress()

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])

  const progressPercentage = useMemo(() => {
    if (!currentCategory) return 0
    return (levelProgress.current / levelProgress.total) * 100
  }, [currentCategory, levelProgress])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value)
  }, [setUserAnswer])

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer()
    }
  }, [checkAnswer])

  const getLevelIcon = useCallback((level: number) => {
    switch (level) {
      case 1: return <Star className="w-4 h-4" />
      case 2: return <Star className="w-4 h-4" />
      case 3: return <Zap className="w-4 h-4" />
      case 4: return <Zap className="w-4 h-4" />
      case 5: return <Trophy className="w-4 h-4" />
      default: return <Star className="w-4 h-4" />
    }
  }, [])

  if (!currentCategory || !currentRoom || !currentPuzzle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Cargando...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentCategory.gradient} p-4`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 backdrop-blur-sm rounded-xl p-4 mb-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={switchCategory}
                className="text-white hover:bg-white/10"
              >
                <Home className="w-4 h-4 mr-2" />
                Categorías
              </Button>
              <div className="flex items-center gap-2">
                {currentCategory.icon}
                <span className="text-white font-semibold">{currentCategory.name}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(gameState.elapsedTime)}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-semibold">{gameState.hints}</span>
              </div>
              
              <Badge className={`${getDifficultyColor(currentRoom.difficulty)} text-white`}>
                {currentRoom.difficulty.toUpperCase()}
              </Badge>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-purple-200 mb-1">
              <span className="flex items-center gap-2">
                {getLevelIcon(currentRoom.level)}
                {currentRoom.name}
              </span>
              <span>Nivel {levelProgress.current} de {levelProgress.total}</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-purple-800/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-black/20 backdrop-blur-sm border-purple-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                <DoorOpen className="w-6 h-6" />
                {currentRoom.name}
              </CardTitle>
              <CardDescription className="text-purple-200 text-lg">
                {currentRoom.description}
              </CardDescription>
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant="outline" className="border-purple-400/30 text-purple-200">
                  {currentRoom.puzzles.length} acertijos disponibles
                </Badge>
                <Badge className={`${getDifficultyColor(currentRoom.difficulty)} text-white`}>
                  Dificultad: {currentRoom.difficulty}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Key className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Acertijo</h3>
                  <Badge variant="secondary" className="ml-auto bg-purple-800/50 text-purple-200">
                    {gameState.solvedPuzzles + 1} / {currentRoom.puzzles.length}
                  </Badge>
                </div>
                
                <p className="text-lg text-purple-100 leading-relaxed">
                  {currentPuzzle.question}
                </p>
              </motion.div>

              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-yellow-900/30 rounded-xl p-4 border border-yellow-500/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-lg font-semibold text-yellow-200">Pista</h4>
                  </div>
                  <p className="text-yellow-100">{currentPuzzle.hint}</p>
                </motion.div>
              )}

              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Escribe tu respuesta..."
                    value={userAnswer}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-purple-900/30 border-purple-500/20 text-white placeholder-purple-300"
                    disabled={isCorrect}
                  />
                  <Button
                    onClick={checkAnswer}
                    disabled={!userAnswer.trim() || isCorrect}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Verificar
                  </Button>
                </div>

                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      isCorrect 
                        ? 'bg-green-900/30 border border-green-500/20' 
                        : 'bg-red-900/30 border border-red-500/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <Trophy className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                      )}
                      <span className={isCorrect ? 'text-green-200' : 'text-red-200'}>
                        {feedback}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  onClick={useHint}
                  disabled={gameState.hints === 0 || showHint || isCorrect}
                  variant="outline"
                  className="border-purple-500/20 text-purple-200 hover:bg-purple-800/20"
                >
                  {showHint ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                  {showHint ? 'Ocultar Pista' : 'Usar Pista'} ({gameState.hints})
                </Button>
                
                <Button
                  onClick={resetGame}
                  variant="outline"
                  className="border-red-500/20 text-red-200 hover:bg-red-800/20"
                >
                  Reiniciar Juego
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
})

GameBoard.displayName = 'GameBoard'