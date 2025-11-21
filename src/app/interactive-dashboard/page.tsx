'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  Twitter, 
  Globe, 
  Trophy, 
  Clock, 
  Star, 
  User, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Gamepad2, 
  Target, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Home,
  TrendingUp,
  Award,
  Play,
  Pause,
  RotateCcw,
  Share2,
  Download,
  Filter,
  Search,
  Bell,
  Calendar,
  Activity,
  Users,
  Globe2,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Edit,
  Save,
  X,
  Check,
  AlertCircle,
  Info,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react'

// ======================
// TIPOS E INTERFACES
// ======================

interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  joinDate: string
  totalGamesPlayed: number
  favoriteCategory: string
  level: string
  experience: number
  achievements: Achievement[]
  friends: Friend[]
  privacy: PrivacySettings
}

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  unlockedDate?: string
  progress: number
  maxProgress: number
}

interface Friend {
  id: string
  name: string
  avatar: string
  status: 'online' | 'offline' | 'playing'
  lastSeen: string
  level: number
  progress: number
}

interface PrivacySettings {
  profilePublic: boolean
  showProgress: boolean
  showAchievements: boolean
  allowFriendRequests: boolean
}

interface GameStats {
  totalPlayTime: number
  averageSessionTime: number
  bestTime: number
  puzzlesSolved: number
  hintsUsed: number
  perfectGames: number
  currentStreak: number
  bestStreak: number
}

interface CategoryProgress {
  id: string
  name: string
  icon: string
  color: string
  progress: number
  totalPuzzles: number
  completedPuzzles: number
  bestTime: number
  averageTime: number
  difficulty: 'fácil' | 'medio' | 'difícil'
  locked: boolean
}

// ======================
// DATOS SIMULADOS
// ======================

const mockUserProfile: UserProfile = {
  id: 'user_001',
  name: 'Jugador Mágico',
  email: 'jugador@escaperoom.com',
  phone: '+34 600 123 456',
  avatar: '/avatars/user-avatar.jpg',
  joinDate: '2024-01-15',
  totalGamesPlayed: 156,
  favoriteCategory: 'espacio',
  level: 'Experto',
  experience: 2847,
  achievements: [
    {
      id: 'first_puzzle',
      name: 'Primer Paso',
      description: 'Resuelve tu primer puzzle',
      icon: '🎯',
      unlocked: true,
      unlockedDate: '2024-01-15',
      progress: 1,
      maxProgress: 1
    },
    {
      id: 'speed_demon',
      name: 'Demonio de Velocidad',
      description: 'Resuelve 10 puzzles en menos de 5 minutos',
      icon: '⚡',
      unlocked: true,
      unlockedDate: '2024-02-20',
      progress: 12,
      maxProgress: 10
    },
    {
      id: 'perfectionist',
      name: 'Perfeccionista',
      description: 'Completa 5 categorías sin usar pistas',
      icon: '💎',
      unlocked: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: 'explorer',
      name: 'Explorador',
      description: 'Juega todas las categorías',
      icon: '🗺️',
      unlocked: true,
      unlockedDate: '2024-03-10',
      progress: 10,
      maxProgress: 10
    }
  ],
  friends: [
    {
      id: 'friend_001',
      name: 'Ana Martínez',
      avatar: '/avatars/ana.jpg',
      status: 'online',
      lastSeen: 'Ahora',
      level: 15,
      progress: 67
    },
    {
      id: 'friend_002',
      name: 'Carlos Ruiz',
      avatar: '/avatars/carlos.jpg',
      status: 'playing',
      lastSeen: 'Hace 5 min',
      level: 22,
      progress: 84
    },
    {
      id: 'friend_003',
      name: 'Laura Sánchez',
      avatar: '/avatars/laura.jpg',
      status: 'offline',
      lastSeen: 'Hace 2 horas',
      level: 18,
      progress: 45
    }
  ],
  privacy: {
    profilePublic: true,
    showProgress: true,
    showAchievements: true,
    allowFriendRequests: true
  }
}

const mockGameStats: GameStats = {
  totalPlayTime: 48720, // segundos
  averageSessionTime: 1847,
  bestTime: 127,
  puzzlesSolved: 89,
  hintsUsed: 23,
  perfectGames: 12,
  currentStreak: 5,
  bestStreak: 15
}

const mockCategories: CategoryProgress[] = [
  {
    id: 'clasico',
    name: 'Clásico',
    icon: '🎭',
    color: '#8B5CF6',
    progress: 100,
    totalPuzzles: 16,
    completedPuzzles: 16,
    bestTime: 245,
    averageTime: 312,
    difficulty: 'difícil',
    locked: false
  },
  {
    id: 'naturaleza',
    name: 'Naturaleza',
    icon: '🌿',
    color: '#10B981',
    progress: 87,
    totalPuzzles: 16,
    completedPuzzles: 14,
    bestTime: 189,
    averageTime: 267,
    difficulty: 'medio',
    locked: false
  },
  {
    id: 'espacio',
    name: 'Exploración Espacial',
    icon: '🚀',
    color: '#3B82F6',
    progress: 75,
    totalPuzzles: 16,
    completedPuzzles: 12,
    bestTime: 156,
    averageTime: 234,
    difficulty: 'medio',
    locked: false
  },
  {
    id: 'tiempo',
    name: 'Viaje en el Tiempo',
    icon: '⏰',
    color: '#F59E0B',
    progress: 62,
    totalPuzzles: 16,
    completedPuzzles: 10,
    bestTime: 198,
    averageTime: 289,
    difficulty: 'medio',
    locked: false
  },
  {
    id: 'deporte',
    name: 'Desafío Deportivo',
    icon: '🏆',
    color: '#EF4444',
    progress: 50,
    totalPuzzles: 16,
    completedPuzzles: 8,
    bestTime: 167,
    averageTime: 245,
    difficulty: 'fácil',
    locked: false
  }
]

const developerInfo = {
  name: 'Escape Room Mágico Team',
  email: 'contacto@escaperoommagico.com',
  phone: '+34 900 123 456',
  address: 'Calle Magia 123, 28080 Madrid, España',
  website: 'www.escaperoommagico.com',
  github: 'github.com/escaperoommagico',
  twitter: '@escaperoommagico',
  discord: 'discord.gg/escaperoommagico'
}

// ======================
// COMPONENTE PRINCIPAL
// ======================

/**
 * Dashboard Interactivo Standalone
 * 
 * Dashboard completamente independiente con todas las características:
 * - Perfil de usuario interactivo
 * - Estadísticas detalladas y animadas
 * - Sistema de logros y amigos
 * - Configuración de privacidad
 * - Contacto con el equipo
 * 
 * @returns {JSX.Element} Dashboard interactivo
 */
export default function InteractiveDashboard() {
  // ======================
  // ESTADO DEL COMPONENTE
  // ======================
  
  const [userProfile, setUserProfile] = useState<UserProfile>(mockUserProfile)
  const [gameStats, setGameStats] = useState<GameStats>(mockGameStats)
  const [categories, setCategories] = useState<CategoryProgress[]>(mockCategories)
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showNotifications, setShowNotifications] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 'notif_001',
      title: 'Nuevo logro desbloqueado',
      message: '¡Has desbloqueado "Demonio de Velocidad"!',
      time: 'Hace 5 minutos',
      read: false,
      type: 'achievement'
    },
    {
      id: 'notif_002',
      title: 'Amigo en línea',
      message: 'Ana Martínez está jugando ahora',
      time: 'Hace 10 minutos',
      read: false,
      type: 'friend'
    }
  ])

  // ======================
  // FUNCIONES AUXILIARES
  // ======================
  
  /**
   * Formatea tiempo en segundos a formato legible
   */
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`
    } else {
      return `${secs}s`
    }
  }

  /**
   * Calcula el nivel de experiencia
   */
  const calculateLevel = (exp: number): { level: number, progress: number } => {
    const level = Math.floor(exp / 100)
    const progress = (exp % 100) / 100
    return { level, progress }
  }

  /**
   * Simula la carga de datos
   */
  const simulateDataLoad = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  /**
   * Maneja el guardado del perfil
   */
  const handleSaveProfile = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsEditingProfile(false)
    setIsLoading(false)
    
    // Mostrar notificación de éxito
    addNotification({
      id: `notif_${Date.now()}`,
      title: 'Perfil actualizado',
      message: 'Tu perfil ha sido actualizado correctamente',
      time: 'Ahora',
      read: false,
      type: 'success'
    })
  }

  /**
   * Añade una nueva notificación
   */
  const addNotification = (notification: any) => {
    setNotifications(prev => [notification, ...prev])
  }

  /**
   * Marca notificación como leída
   */
  const markAsRead = (notifId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notifId ? { ...notif, read: true } : notif
      )
    )
  }

  /**
   * Filtra categorías según búsqueda
   */
  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // ======================
  // EFFECTS
  // ======================
  
  useEffect(() => {
    simulateDataLoad()
  }, [])

  // ======================
  // COMPONENTES DE UI
  // ======================
  
  /**
   * Header del dashboard
   */
  const DashboardHeader = () => (
    <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white p-6 shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="w-16 h-16 border-4 border-white/30">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="text-2xl bg-purple-700 text-white">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{userProfile.name}</h1>
              <p className="text-purple-100">Nivel {calculateLevel(userProfile.experience).level} • {userProfile.level}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-purple-100">Experiencia</p>
              <p className="text-xl font-bold">{userProfile.experience} XP</p>
            </div>
            
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-white hover:bg-white/20"
              >
                <Bell className="w-5 h-5" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </Button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold text-gray-800">Notificaciones</h3>
                  </div>
                  {notifications.map(notif => (
                    <div
                      key={notif.id}
                      className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${!notif.read ? 'bg-blue-50' : ''}`}
                      onClick={() => markAsRead(notif.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-sm">{notif.title}</p>
                          <p className="text-gray-600 text-xs mt-1">{notif.message}</p>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">{notif.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="text-white hover:bg-white/20"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white/30 hover:bg-white/20"
            >
              <Settings className="w-4 h-4 mr-2" />
              Configuración
            </Button>
          </div>
        </div>
      </div>
    </header>
  )

  /**
   * Tarjeta de estadísticas animada
   */
  const StatsCard = ({ title, value, icon, trend, color }: {
    title: string
    value: string | number
    icon: React.ReactNode
    trend?: number
    color: string
  }) => (
    <Card className={`border-2 ${color} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            {trend !== undefined && (
              <div className="flex items-center mt-1">
                {trend > 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingUp className="w-4 h-4 text-red-500 mr-1 transform rotate-180" />
                )}
                <span className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {Math.abs(trend)}%
                </span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  /**
   * Componente de logros
   */
  const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
    <Card className={`border-2 ${achievement.unlocked ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50'} transition-all duration-300`}>
      <CardContent className="p-4 text-center">
        <div className={`text-4xl mb-2 ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
          {achievement.icon}
        </div>
        <h3 className="font-semibold text-gray-800 text-sm">{achievement.name}</h3>
        <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
        {achievement.unlocked ? (
          <Badge className="mt-2 bg-yellow-500 text-white">
            <Trophy className="w-3 h-3 mr-1" />
            Desbloqueado
          </Badge>
        ) : (
          <div className="mt-2">
            <Progress value={(achievement.progress / achievement.maxProgress) * 100} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">
              {achievement.progress}/{achievement.maxProgress}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )

  /**
   * Tarjeta de amigo
   */
  const FriendCard = ({ friend }: { friend: Friend }) => (
    <Card className="border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="w-12 h-12">
              <AvatarImage src={friend.avatar} alt={friend.name} />
              <AvatarFallback>{friend.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
              friend.status === 'online' ? 'bg-green-500' :
              friend.status === 'playing' ? 'bg-yellow-500' : 'bg-gray-400'
            }`}></div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800 text-sm">{friend.name}</p>
            <p className="text-xs text-gray-500">Nivel {friend.level} • {friend.progress}%</p>
            <p className="text-xs text-gray-400">{friend.lastSeen}</p>
          </div>
          <Button variant="outline" size="sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  // ======================
  // RENDERIZADO PRINCIPAL
  // ======================
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'}`}>
      {/* Header */}
      <DashboardHeader />
      
      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs de Navegación */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/90 backdrop-blur-sm border border-purple-200">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Resumen
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Progreso
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Logros
            </TabsTrigger>
            <TabsTrigger value="friends" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Amigos
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Contacto
            </TabsTrigger>
          </TabsList>

          {/* Tab Resumen */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Tiempo Total"
                value={formatTime(gameStats.totalPlayTime)}
                icon={<Clock className="w-6 h-6 text-purple-600" />}
                trend={12}
                color="border-purple-400"
              />
              <StatsCard
                title="Puzzles Resueltos"
                value={gameStats.puzzlesSolved}
                icon={<Target className="w-6 h-6 text-green-600" />}
                trend={8}
                color="border-green-400"
              />
              <StatsCard
                title="Racha Actual"
                value={`${gameStats.currentStreak} días`}
                icon={<Zap className="w-6 h-6 text-yellow-600" />}
                trend={25}
                color="border-yellow-400"
              />
              <StatsCard
                title="Mejor Tiempo"
                value={`${gameStats.bestTime}s`}
                icon={<Trophy className="w-6 h-6 text-red-600" />}
                trend={-5}
                color="border-red-400"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Actividad Reciente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: 'Exploración Espacial', time: 'Hace 2 horas', result: 'Completado', icon: '🚀' },
                      { category: 'Viaje en el Tiempo', time: 'Ayer', result: 'Abandonado', icon: '⏰' },
                      { category: 'Desafío Deportivo', time: 'Hace 2 días', result: 'Completado', icon: '🏆' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{activity.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-800">{activity.category}</p>
                            <p className="text-sm text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                        <Badge className={activity.result === 'Completado' ? 'bg-green-500' : 'bg-red-500'}>
                          {activity.result}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-pink-600" />
                    Progreso General
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">
                        {Math.round(categories.reduce((acc, cat) => acc + cat.progress, 0) / categories.length)}%
                      </div>
                      <p className="text-sm text-gray-600">Progreso Total</p>
                      <Progress 
                        value={categories.reduce((acc, cat) => acc + cat.progress, 0) / categories.length} 
                        className="mt-2 h-3" 
                      />
                    </div>
                    <div className="space-y-2">
                      {categories.slice(0, 3).map(cat => (
                        <div key={cat.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span>{cat.icon}</span>
                            <span className="text-sm font-medium">{cat.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Progress value={cat.progress} className="w-20 h-2" />
                            <span className="text-sm text-gray-600">{cat.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab Perfil */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Información Personal
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white/30 hover:bg-white/20"
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                  >
                    {isEditingProfile ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                        <AvatarFallback className="text-2xl bg-purple-100 text-purple-600">
                          {userProfile.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{userProfile.name}</h3>
                        <p className="text-gray-600">Miembro desde {new Date(userProfile.joinDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={userProfile.email}
                          disabled={!isEditingProfile}
                          className={`w-full px-3 py-2 border rounded-lg ${isEditingProfile ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                        <input
                          type="tel"
                          value={userProfile.phone}
                          disabled={!isEditingProfile}
                          className={`w-full px-3 py-2 border rounded-lg ${isEditingProfile ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'}`}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">{userProfile.totalGamesPlayed}</p>
                        <p className="text-sm text-gray-600">Partidas Jugadas</p>
                      </div>
                      <div className="text-center p-4 bg-pink-50 rounded-lg">
                        <p className="text-2xl font-bold text-pink-600">{userProfile.experience}</p>
                        <p className="text-sm text-gray-600">Puntos XP</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Configuración de Privacidad</h4>
                      {[
                        { key: 'profilePublic', label: 'Perfil Público' },
                        { key: 'showProgress', label: 'Mostrar Progreso' },
                        { key: 'showAchievements', label: 'Mostrar Logros' },
                        { key: 'allowFriendRequests', label: 'Permitir Solicitudes' }
                      ].map(setting => (
                        <div key={setting.key} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{setting.label}</span>
                          <button
                            className={`w-12 h-6 rounded-full transition-colors ${
                              userProfile.privacy[setting.key as keyof PrivacySettings] 
                                ? 'bg-purple-600' 
                                : 'bg-gray-300'
                            }`}
                            onClick={() => {
                              if (isEditingProfile) {
                                setUserProfile(prev => ({
                                  ...prev,
                                  privacy: {
                                    ...prev.privacy,
                                    [setting.key]: !prev.privacy[setting.key as keyof PrivacySettings]
                                  }
                                }))
                              }
                            }}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                              userProfile.privacy[setting.key as keyof PrivacySettings] 
                                ? 'translate-x-6' 
                                : 'translate-x-1'
                            }`}></div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {isEditingProfile && (
                  <div className="mt-6 flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={handleSaveProfile} disabled={isLoading}>
                      {isLoading ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                      Guardar Cambios
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Progreso */}
          <TabsContent value="progress" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Progreso por Categorías</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar categorías..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map(category => (
                <Card 
                  key={category.id} 
                  className={`border-2 transition-all duration-300 cursor-pointer ${
                    selectedCategory === category.id 
                      ? 'border-purple-500 shadow-xl transform scale-105' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{category.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-800">{category.name}</h3>
                          <p className="text-sm text-gray-500 capitalize">{category.difficulty}</p>
                        </div>
                      </div>
                      {category.locked ? (
                        <Lock className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Unlock className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progreso</span>
                          <span className="font-semibold">{category.progress}%</span>
                        </div>
                        <Progress value={category.progress} className="h-3" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Completados</p>
                          <p className="font-semibold">{category.completedPuzzles}/{category.totalPuzzles}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Mejor Tiempo</p>
                          <p className="font-semibold">{category.bestTime}s</p>
                        </div>
                      </div>
                      
                      {selectedCategory === category.id && (
                        <div className="mt-4 pt-4 border-t">
                          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                            <Play className="w-4 h-4 mr-2" />
                            Jugar Ahora
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab Logros */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userProfile.achievements.map(achievement => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </TabsContent>

          {/* Tab Amigos */}
          <TabsContent value="friends" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userProfile.friends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          </TabsContent>

          {/* Tab Contacto */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-purple-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contacto del Equipo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-sm text-gray-600">{developerInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                      <Phone className="w-5 h-5 text-pink-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Teléfono</p>
                        <p className="text-sm text-gray-600">{developerInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Dirección</p>
                        <p className="text-sm text-gray-600">{developerInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Globe className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Web</p>
                        <p className="text-sm text-gray-600">{developerInfo.website}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Discord
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Envíanos un Mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="¿Sobre qué quieres contactarnos?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Cuéntanos tus ideas, reporta un error o simplemente saluda..."
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        <Mail className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </Button>
                      <Button variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Compartir
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}