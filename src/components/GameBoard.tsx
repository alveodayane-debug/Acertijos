// Componente para mostrar la pantalla de juego principal

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { 
  Loader2, 
  Lock, 
  Key, 
  Clock, 
  AlertTriangle, 
  Lightbulb, 
  DoorOpen, 
  Eye, 
  EyeOff, 
  Trophy, 
  Home 
} from 'lucide-react'

interface GameBoardProps {
  gameState: any
  currentCategory: any
  currentRoomData: any
  currentPuzzle: any
  userAnswer: string
  setUserAnswer: (answer: string) => void
  showHint: boolean
  setShowHint: (show: boolean) => void
  feedback: 'correct' | 'incorrect' | null
  isProcessing: boolean
  showPassword: boolean
  setShowPassword: (show: boolean) => void
  progressPercentage: number
  totalUniqueCompleted: number
  totalPuzzlesInCategory: number
  onSubmit: () => void
  onUseHint: () => void
  onBackToCategories: () => void
  formatTime: (seconds: number) => string
  getDifficultyColor: (difficulty: string) => string
}

export const GameBoard = ({
  gameState,
  currentCategory,
  currentRoomData,
  currentPuzzle,
  userAnswer,
  setUserAnswer,
  showHint,
  setShowHint,
  feedback,
  isProcessing,
  showPassword,
  setShowPassword,
  progressPercentage,
  totalUniqueCompleted,
  totalPuzzlesInCategory,
  onSubmit,
  onUseHint,
  onBackToCategories,
  formatTime,
  getDifficultyColor
}: GameBoardProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) {
      onSubmit()
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentCategory.gradient} flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Estadísticas del juego */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 mb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={onBackToCategories}
                variant="ghost"
                className="text-white hover:bg-white/10 p-2"
              >
                <Home className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                {currentCategory.icon}
                <span className="text-white font-semibold">{currentCategory.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-400" />
                <span className="text-white font-semibold">{currentRoomData.name}</span>
              </div>
              <Badge className={`${getDifficultyColor(currentRoomData.difficulty)} text-white border-0`}>
                {currentRoomData.difficulty}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-white font-mono">{formatTime(gameState.elapsedTime)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <span className="text-white">{gameState.hints} pistas</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-purple-400" />
                <span className="text-white">{totalUniqueCompleted}/{totalPuzzlesInCategory}</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-2 mb-1">
              <Key className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-400">Progreso de escape</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </motion.div>

        {/* Notificación de dificultad */}
        {gameState.difficultyNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg text-center font-semibold shadow-lg">
              {gameState.difficultyNotification}
            </div>
          </motion.div>
        )}

        {/* Tarjeta de habitación */}
        <motion.div
          key={gameState.currentRoom}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold mb-2">
                {currentRoomData.name}
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                {currentRoomData.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {currentPuzzle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <p className="text-xl font-medium leading-relaxed">
                      {currentPuzzle.question}
                    </p>
                  </div>

                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6"
                    >
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-yellow-400" />
                          <span className="font-semibold text-yellow-400">Pista</span>
                        </div>
                        <p className="text-gray-300">{currentPuzzle.hint}</p>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Escribe tu respuesta..."
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-center text-lg py-3 pr-12"
                        disabled={isProcessing || feedback === 'correct'}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>

                    {feedback && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-4 rounded-lg ${
                          feedback === 'correct' 
                            ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                            : 'bg-red-500/20 border border-red-500/30 text-red-400'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {feedback === 'correct' ? (
                            <DoorOpen className="w-5 h-5" />
                          ) : (
                            <AlertTriangle className="w-5 h-5" />
                          )}
                          <span className="font-semibold">
                            {feedback === 'correct' ? '¡Correcto! La puerta se abre...' : 'Respuesta incorrecta. Intenta de nuevo.'}
                          </span>
                        </div>
                      </motion.div>
                    )}

                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={onSubmit}
                        disabled={!userAnswer.trim() || isProcessing || feedback === 'correct'}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Verificando...
                          </>
                        ) : (
                          'Verificar respuesta'
                        )}
                      </Button>
                      
                      <Button
                        onClick={onUseHint}
                        disabled={gameState.hints === 0 || showHint || feedback === 'correct'}
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-3"
                      >
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Usar pista ({gameState.hints})
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}