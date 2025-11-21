// Componente para mostrar la pantalla de victoria

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DoorOpen, Clock, Trophy, Home } from 'lucide-react'

interface VictoryScreenProps {
  currentRoomData: any
  elapsedTime: number
  solvedPuzzles: number
  onResetGame: () => void
  onResetAllProgress: () => void
  onBackToCategories: () => void
  formatTime: (seconds: number) => string
}

export const VictoryScreen = ({ 
  currentRoomData, 
  elapsedTime, 
  solvedPuzzles, 
  onResetGame, 
  onResetAllProgress, 
  onBackToCategories, 
  formatTime 
}: VictoryScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <DoorOpen className="w-16 h-16 text-green-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {currentRoomData.name}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {currentRoomData.description}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">{formatTime(elapsedTime)}</p>
              <p className="text-gray-300 text-sm">Tiempo total</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold">{solvedPuzzles}</p>
              <p className="text-gray-300 text-sm">Acertijos resueltos</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onResetGame}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg"
            >
              Jugar de nuevo
            </Button>
            <Button
              onClick={onResetAllProgress}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-3 text-lg"
            >
              Reiniciar progreso
            </Button>
            <Button
              onClick={onBackToCategories}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-3 text-lg"
            >
              Otra categoría
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}