// Tipos de datos para el juego de escape room

export interface Puzzle {
  id: string
  question: string
  answer: string
  hint: string
}

export interface Room {
  id: string
  name: string
  description: string
  puzzles: Puzzle[]
  nextRoom: string
  difficulty: 'fácil' | 'medio' | 'difícil'
}

export interface Category {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
  gradient: string
  rooms: Record<string, Room>
}

export interface GameState {
  currentCategory: string
  currentRoom: string
  unlockedRooms: string[]
  hints: number
  startTime: number
  elapsedTime: number
  solvedPuzzles: number
  usedPuzzleIds: string[]
  sessionCompletedPuzzles: Record<string, string[]>
  difficultyNotification: string | null
}