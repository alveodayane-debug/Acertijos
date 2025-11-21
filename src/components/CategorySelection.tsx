// Componente para mostrar la selección de categorías

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { categories } from '@/data/categories'

interface CategorySelectionProps {
  sessionCompletedPuzzles: Record<string, string[]>
  onStartCategory: (categoryId: string) => void
  onSelectDifficulty: (categoryId: string, difficulty: 'fácil' | 'medio' | 'difícil') => void
}

export const CategorySelection = ({ 
  sessionCompletedPuzzles, 
  onStartCategory, 
  onSelectDifficulty 
}: CategorySelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
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

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 mt-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div></div>
            <div className="flex flex-wrap gap-2 justify-end">
              <Link href="/interactive-dashboard" target="_blank">
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white hover:from-purple-600 hover:to-pink-600 border-purple-400/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-all duration-200"
                >
                  🎮 Dashboard Interactivo
                </Button>
              </Link>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Escape Room Mágico
          </h1>
          <p className="text-xl text-gray-300">
            Elige tu categoría y comienza una aventura única
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(categories).map((category, index) => {
            const completedInCategory = sessionCompletedPuzzles[category.id]?.length || 0
            const totalInCategory = Object.values(category.rooms).reduce((acc, room) => acc + room.puzzles.length, 0) - 1
            const categoryProgress = (completedInCategory / totalInCategory) * 100

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full bg-gradient-to-br ${category.gradient} border-white/20 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/50`}>
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full ${category.color} bg-opacity-20 backdrop-blur-sm border border-white/20 group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300`}>
                        <div className="text-4xl">
                          {category.icon}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-gray-200 text-base font-medium">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2 bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-gray-200">Progreso</span>
                        <span className="text-white">{completedInCategory}/{totalInCategory}</span>
                      </div>
                      <Progress value={categoryProgress} className="h-3 bg-white/20" />
                      <div className="text-xs text-gray-300 mt-1">
                        {Math.round(categoryProgress)}% completado
                      </div>
                    </div>
                    
                    <div className="space-y-2 bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                      <p className="text-sm font-semibold text-white mb-2">Selecciona dificultad:</p>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          size="sm"
                          onClick={() => onSelectDifficulty(category.id, 'fácil')}
                          className="bg-green-600/90 hover:bg-green-700 text-white text-xs py-2 px-2 transition-all duration-200 hover:scale-105 border border-green-400/30"
                        >
                          <div className="flex flex-col items-center">
                            <span className="font-bold">Fácil</span>
                            <span className="text-xs opacity-75">Principiante</span>
                          </div>
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => onSelectDifficulty(category.id, 'medio')}
                          className="bg-yellow-600/90 hover:bg-yellow-700 text-white text-xs py-2 px-2 transition-all duration-200 hover:scale-105 border border-yellow-400/30"
                        >
                          <div className="flex flex-col items-center">
                            <span className="font-bold">Medio</span>
                            <span className="text-xs opacity-75">Intermedio</span>
                          </div>
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => onSelectDifficulty(category.id, 'difícil')}
                          className="bg-red-600/90 hover:bg-red-700 text-white text-xs py-2 px-2 transition-all duration-200 hover:scale-105 border border-red-400/30"
                        >
                          <div className="flex flex-col items-center">
                            <span className="font-bold">Difícil</span>
                            <span className="text-xs opacity-75">Experto</span>
                          </div>
                        </Button>
                      </div>
                      <p className="text-xs text-gray-300 text-center mt-2">
                        💡 El juego avanzará automáticamente de dificultad
                      </p>
                    </div>
                    
                    <Button 
                      onClick={() => onStartCategory(category.id)}
                      className={`w-full ${category.color} hover:opacity-90 hover:scale-105 text-white font-bold py-3 text-lg shadow-lg border border-white/30 transition-all duration-200`}
                    >
                      🚀 Comenzar Aventura
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-400"
        >
          <p className="text-sm">
            Cada categoría tiene sus propios acertijos únicos. ¡Explóralas todas!
          </p>
        </motion.div>
      </div>
    </div>
  )
}