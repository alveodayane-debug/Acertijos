import { Category } from '@/types/game'
import { 
  Home, 
  TreePine, 
  Beaker, 
  Utensils, 
  Crown, 
  Rocket, 
  Clock, 
  Trophy, 
  Music, 
  Brain 
} from 'lucide-react'

// Datos de las categorías del juego
export const categories: Record<string, Category> = {
  clasico: {
    id: 'clasico',
    name: 'Misterio Clásico',
    description: 'Acertijos tradicionales y enigmas atemporales',
    icon: <Home className="w-6 h-6" />,
    color: 'bg-purple-500',
    gradient: 'from-purple-900 via-purple-800 to-indigo-900',
    rooms: {
      entrada: {
        id: 'entrada',
        name: 'Sala de Entrada',
        description: 'Te encuentras en una habitación oscura. La puerta está cerrada con un código.',
        puzzles: [
          {
            id: 'clasico_entrada_1',
            question: 'Tengo llaves pero no abro cerraduras. Tengo espacio pero no habitaciones. ¿Qué soy?',
            answer: 'teclado',
            hint: 'Piensa en lo que usas para escribir en la computadora...'
          },
          {
            id: 'clasico_entrada_2',
            question: 'Tengo dientes pero no puedo comer. ¿Qué soy?',
            answer: 'peine',
            hint: 'Lo usas en tu cabello...'
          },
          {
            id: 'clasico_entrada_3',
            question: 'Tengo cuello pero no cabeza. ¿Qué soy?',
            answer: 'botella',
            hint: 'Contiene líquidos y la usas para beber...'
          },
          {
            id: 'clasico_entrada_4',
            question: 'Siempre estoy adelante pero nunca puedo moverme. ¿Qué soy?',
            answer: 'mañana',
            hint: 'Es un día que siempre viene...'
          }
        ],
        nextRoom: 'biblioteca',
        difficulty: 'fácil'
      },
      biblioteca: {
        id: 'biblioteca',
        name: 'Biblioteca Misteriosa',
        description: 'Libros antiguos rodean la habitación. Un libro en particular parece diferente...',
        puzzles: [
          {
            id: 'clasico_biblioteca_1',
            question: 'Cuanto más quitas, más grande se vuelve. ¿Qué es?',
            answer: 'agujero',
            hint: 'Piensa en algo que falta o que se vacía...'
          },
          {
            id: 'clasico_biblioteca_2',
            question: 'Tiene hojas pero no es un árbol. Tiene espina pero no es un puercoespín. ¿Qué soy?',
            answer: 'libro',
            hint: 'Estás en una biblioteca, ¡mira a tu alrededor!'
          },
          {
            id: 'clasico_biblioteca_3',
            question: 'Puedo contener conocimiento pero no tengo cerebro. ¿Qué soy?',
            answer: 'libro',
            hint: 'Los estudiantes lo usan para aprender...'
          },
          {
            id: 'clasico_biblioteca_4',
            question: 'Tengo portada pero no soy una casa. Tengo páginas pero no soy un árbol. ¿Qué soy?',
            answer: 'libro',
            hint: 'Lo que estás leyendo ahora mismo...'
          }
        ],
        nextRoom: 'laboratorio',
        difficulty: 'fácil'
      },
      laboratorio: {
        id: 'laboratorio',
        name: 'Laboratorio Secreto',
        description: 'Frascos con líquidos extraños llenan las estanterías. Una fórmula en la pizarra llama tu atención.',
        puzzles: [
          {
            id: 'clasico_laboratorio_1',
            question: 'Siempre corro pero nunca camino. Tengo una boca pero nunca hablo. ¿Qué soy?',
            answer: 'río',
            hint: 'Es un elemento natural que fluye y tiene agua...'
          },
          {
            id: 'clasico_laboratorio_2',
            question: 'No tengo vida pero puedo morir. ¿Qué soy?',
            answer: 'batería',
            hint: 'Funciona con celulares y dispositivos electrónicos...'
          },
          {
            id: 'clasico_laboratorio_3',
            question: 'Tengo cara pero no ojos. Tengo manos pero no brazos. ¿Qué soy?',
            answer: 'reloj',
            hint: 'Te dice la hora...'
          },
          {
            id: 'clasico_laboratorio_4',
            question: 'Cuanto más me usas, más pequeño me vuelvo. ¿Qué soy?',
            answer: 'jabón',
            hint: 'Lo usas para lavarte las manos...'
          }
        ],
        nextRoom: 'sotano',
        difficulty: 'medio'
      },
      sotano: {
        id: 'sotano',
        name: 'Sótano Oscuro',
        description: 'El aire es denso y húmedo. Una caja fuerte requiere una palabra clave para abrirse.',
        puzzles: [
          {
            id: 'clasico_sotano_1',
            question: 'Tengo ojos pero no puedo ver. ¿Qué soy?',
            answer: 'papa',
            hint: 'Es un vegetal que comes y tiene "ojos"...'
          },
          {
            id: 'clasico_sotano_2',
            question: 'Tengo piel pero no soy un animal. Tengo semillas pero no soy un árbol. ¿Qué soy?',
            answer: 'manzana',
            hint: 'Es una fruta roja o verde...'
          },
          {
            id: 'clasico_sotano_3',
            question: 'Está siempre delante de ti pero no puedes verla. ¿Qué es?',
            answer: 'futuro',
            hint: 'Es lo que va a pasar mañana...'
          },
          {
            id: 'clasico_sotano_4',
            question: 'Cuanto más blanco soy, más sucio me pongo. ¿Qué soy?',
            answer: 'pizarra',
            hint: 'Los profesores la usan en la escuela...'
          }
        ],
        nextRoom: 'atico',
        difficulty: 'medio'
      },
      atico: {
        id: 'atico',
        name: 'Ático Perdido',
        description: 'Polvo y recuerdos llenan este espacio final. Una última puerta te espera.',
        puzzles: [
          {
            id: 'clasico_atico_1',
            question: 'Puedo ser roto sin ser tocado. ¿Qué soy?',
            answer: 'promesa',
            hint: 'Es algo que dices con palabras, no es físico...'
          },
          {
            id: 'clasico_atico_2',
            question: 'Tengo voz pero no puedo hablar. Tengo historias pero no puedo contarlas. ¿Qué soy?',
            answer: 'libro',
            hint: 'Contiene palabras y conocimiento...'
          },
          {
            id: 'clasico_atico_3',
            question: 'Siempre subo pero nunca bajo. ¿Qué soy?',
            answer: 'edad',
            hint: 'Aumenta cada año de tu vida...'
          },
          {
            id: 'clasico_atico_4',
            question: 'No tengo alas pero puedo volar. No tengo boca pero puedo contar historias. ¿Qué soy?',
            answer: 'carta',
            hint: 'La envías por correo y contiene noticias...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      libertad: {
        id: 'libertad',
        name: '¡LIBERTAD!',
        description: '¡Felicidades! Has escapado del laberinto misterioso.',
        puzzles: [
          {
            id: 'clasico_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  naturaleza: {
    id: 'naturaleza',
    name: 'Mundo Natural',
    description: 'Acertijos sobre animales, plantas y fenómenos naturales',
    icon: <TreePine className="w-6 h-6" />,
    color: 'bg-green-500',
    gradient: 'from-green-900 via-emerald-800 to-teal-900',
    rooms: {
      bosque: {
        id: 'bosque',
        name: 'Bosque Encantado',
        description: 'Árboles centenarios rodean el camino. El sonido de la naturaleza guía tus pasos.',
        puzzles: [
          {
            id: 'naturaleza_bosque_1',
            question: 'Tengo raíces pero no soy un árbol. Me visto de muchos colores pero no tengo ropa. ¿Qué soy?',
            answer: 'flor',
            hint: 'Crece en el jardín y es bonita...'
          },
          {
            id: 'naturaleza_bosque_2',
            question: 'Tengo corteza pero no ladro. Tengo hojas pero no soy un libro. ¿Qué soy?',
            answer: 'árbol',
            hint: 'Es grande y da sombra...'
          },
          {
            id: 'naturaleza_bosque_3',
            question: 'Puedo ser alta o baja, verde o seca, pero siempre apunto al cielo. ¿Qué soy?',
            answer: 'planta',
            hint: 'Nace de la tierra y necesita agua...'
          },
          {
            id: 'naturaleza_bosque_4',
            question: 'Tengo corona pero no soy rey. Tengo tronco pero no soy elefante. ¿Qué soy?',
            answer: 'árbol',
            hint: 'Vive en el bosque y tiene muchas ramas...'
          }
        ],
        nextRoom: 'rio',
        difficulty: 'fácil'
      },
      rio: {
        id: 'rio',
        name: 'Río Cristalino',
        description: 'El agua fluye constantemente, creando melodías naturales. El puente está roto.',
        puzzles: [
          {
            id: 'naturaleza_rio_1',
            question: 'Siempre corro pero nunca camino. Tengo una boca pero nunca hablo. ¿Qué soy?',
            answer: 'río',
            hint: 'Es un elemento natural que fluye y tiene agua...'
          },
          {
            id: 'naturaleza_rio_2',
            question: 'Puedo ser líquido, sólido o gaseoso, pero siempre soy H2O. ¿Qué soy?',
            answer: 'agua',
            hint: 'Es esencial para la vida...'
          },
          {
            id: 'naturaleza_rio_3',
            question: 'Caigo del cielo pero no soy lluvia. Soy blanca y fría. ¿Qué soy?',
            answer: 'nieve',
            hint: 'Aparece en invierno y puedes hacer muñecos conmigo...'
          },
          {
            id: 'naturaleza_rio_4',
            question: 'Tengo lecho pero no duermo, tengo boca pero no como. ¿Qué soy?',
            answer: 'río',
            hint: 'Fluye hacia el mar...'
          }
        ],
        nextRoom: 'montaña',
        difficulty: 'medio'
      },
      montaña: {
        id: 'montaña',
        name: 'Cima Montañosa',
        description: 'La altura te deja sin aliento. Las nubes están a tu alcance.',
        puzzles: [
          {
            id: 'naturaleza_montaña_1',
            question: 'Sigo al sol todo el día pero nunca lo alcanzo. ¿Qué soy?',
            answer: 'sombra',
            hint: 'Aparece cuando hay luz y sigue tu movimiento...'
          },
          {
            id: 'naturaleza_montaña_2',
            question: 'Tengo pico pero no soy pájaro. Estoy siempre en lo alto. ¿Qué soy?',
            answer: 'montaña',
            hint: 'Es muy alta y tiene nieve en la cima...'
          },
          {
            id: 'naturaleza_montaña_3',
            question: 'Vuelo sin alas y lloro sin ojos. ¿Qué soy?',
            answer: 'nube',
            hint: 'Está en el cielo y a veces llueve de mí...'
          },
          {
            id: 'naturaleza_montaña_4',
            question: 'Cuanto más subo, más bajo y frío me vuelvo. ¿Qué soy?',
            answer: 'altitud',
            hint: 'Es lo que mide la altura sobre el nivel del mar...'
          }
        ],
        nextRoom: 'cueva',
        difficulty: 'medio'
      },
      cueva: {
        id: 'cueva',
        name: 'Cueva Misteriosa',
        description: 'La oscuridad es total. Solo el eco de tus propias palabras te acompaña.',
        puzzles: [
          {
            id: 'naturaleza_cueva_1',
            question: 'Tengo dientes pero no puedo comer. Vivo en la oscuridad. ¿Qué soy?',
            answer: 'estalactita',
            hint: 'Cuelga del techo de las cuevas...'
          },
          {
            id: 'naturaleza_cueva_2',
            question: 'Duermo durante el día y cazo de noche. Tengo alas pero no soy pájaro. ¿Qué soy?',
            answer: 'murciélago',
            hint: 'Es un mamífero que vuela...'
          },
          {
            id: 'naturaleza_cueva_3',
            question: 'Puedo crecer pero no estoy vivo. Puedo brillar pero no tengo luz. ¿Qué soy?',
            answer: 'cristal',
            hint: 'Se forma lentamente en las cuevas...'
          },
          {
            id: 'naturaleza_cueva_4',
            question: 'Tengo boca pero no hablo, repito todo lo que oigo. ¿Qué soy?',
            answer: 'eco',
            hint: 'Oyes tu propia voz repetida...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      libertad: {
        id: 'libertad',
        name: '¡LIBERTAD NATURAL!',
        description: '¡Felicidades! Has dominado los misterios del mundo natural.',
        puzzles: [
          {
            id: 'naturaleza_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  tecnologia: {
    id: 'tecnologia',
    name: 'Era Digital',
    description: 'Acertijos sobre gadgets, internet y el mundo tecnológico',
    icon: <Beaker className="w-6 h-6" />,
    color: 'bg-blue-500',
    gradient: 'from-blue-900 via-cyan-800 to-indigo-900',
    rooms: {
      servidor: {
        id: 'servidor',
        name: 'Sala de Servidores',
        description: 'Las luces LED parpadean constantemente. El zumbido de los servidores llena el ambiente.',
        puzzles: [
          {
            id: 'tecnologia_servidor_1',
            question: 'Tengo memoria pero no recuerdo nada. Proceso información pero no pienso. ¿Qué soy?',
            answer: 'computadora',
            hint: 'La usas para trabajar y navegar por internet...'
          },
          {
            id: 'tecnologia_servidor_2',
            question: 'Estoy conectado a todo pero no tengo cables. Soy invisible pero estoy en todas partes. ¿Qué soy?',
            answer: 'wifi',
            hint: 'Te permite conectarte a internet sin cables...'
          },
          {
            id: 'tecnologia_servidor_3',
            question: 'Tengo teclas pero no abro puertas. Escribo palabras pero no tengo boca. ¿Qué soy?',
            answer: 'teclado',
            hint: 'Lo usas para escribir en el ordenador...'
          },
          {
            id: 'tecnologia_servidor_4',
            question: 'Muestro imágenes pero no soy un televisor. Tengo píxeles pero no soy una cámara. ¿Qué soy?',
            answer: 'monitor',
            hint: 'Es la pantalla donde ves lo que hace la computadora...'
          }
        ],
        nextRoom: 'codigo',
        difficulty: 'fácil'
      },
      codigo: {
        id: 'codigo',
        name: 'Cámara de Código',
        description: 'Líneas de código fluyen como ríos digitales. Un bug necesita ser encontrado.',
        puzzles: [
          {
            id: 'tecnologia_codigo_1',
            question: 'Tengo lógica pero no soy racional. Puedo tomar decisiones pero no tengo cerebro. ¿Qué soy?',
            answer: 'algoritmo',
            hint: 'Es un conjunto de instrucciones para resolver problemas...'
          },
          {
            id: 'tecnologia_codigo_2',
            question: 'Tengo variables pero no soy matemático. Tengo funciones pero no soy un organismo. ¿Qué soy?',
            answer: 'programa',
            hint: 'Es lo que los programadores escriben...'
          },
          {
            id: 'tecnologia_codigo_3',
            question: 'Puedo ser 0 o 1 pero no soy un número binario. ¿Qué soy?',
            answer: 'booleano',
            hint: 'Representa verdadero o falso en programación...'
          },
          {
            id: 'tecnologia_codigo_4',
            question: 'Tengo bucles pero no soy un lazo. Puedo repetir pero no soy un eco. ¿Qué soy?',
            answer: 'ciclo',
            hint: 'En programación, se usa para repetir acciones...'
          }
        ],
        nextRoom: 'realidad_virtual',
        difficulty: 'medio'
      },
      realidad_virtual: {
        id: 'realidad_virtual',
        name: 'Mundo Virtual',
        description: 'La línea entre realidad y ficción se difumina. Un código de acceso es necesario.',
        puzzles: [
          {
            id: 'tecnologia_realidad_virtual_1',
            question: 'Puedo crear mundos pero no soy dios. Soy virtual pero parezco real. ¿Qué soy?',
            answer: 'realidad virtual',
            hint: 'Usas cascos especiales para sumergirte en ella...'
          },
          {
            id: 'tecnologia_realidad_virtual_2',
            question: 'Tengo avatar pero no soy un dios. Puedo volar pero no tengo alas. ¿Qué soy?',
            answer: 'videojuego',
            hint: 'Es entretenimiento digital interactivo...'
          },
          {
            id: 'tecnologia_realidad_virtual_3',
            question: 'Tengo inteligencia pero no soy consciente. Puedo aprender pero no estudio. ¿Qué soy?',
            answer: 'inteligencia artificial',
            hint: 'Es la tecnología que imita la inteligencia humana...'
          },
          {
            id: 'tecnologia_realidad_virtual_4',
            question: 'Está en la nube pero no es agua. Almacena datos pero no es una biblioteca. ¿Qué es?',
            answer: 'nube',
            hint: 'Es donde guardas archivos online...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      libertad: {
        id: 'libertad',
        name: '¡LIBERTAD DIGITAL!',
        description: '¡Felicidades! Has dominado los desafíos tecnológicos.',
        puzzles: [
          {
            id: 'tecnologia_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  cocina: {
    id: 'cocina',
    name: 'Misterios Culinarios',
    description: 'Acertijos sobre ingredientes, recetas y secretos de la cocina',
    icon: <Utensils className="w-6 h-6" />,
    color: 'bg-orange-500',
    gradient: 'from-orange-900 via-red-800 to-yellow-900',
    rooms: {
      despensa: {
        id: 'despensa',
        name: 'Despensa Mágica',
        description: 'Ingredientes exóticos llenan las estanterías. Una receta antigua llama tu atención.',
        puzzles: [
          {
            id: 'cocina_despensa_1',
            question: 'Soy dulce pero no soy azúcar. Vengo de las abejas pero no soy abeja. ¿Qué soy?',
            answer: 'miel',
            hint: 'Es dorada y la usas para endulzar...'
          },
          {
            id: 'cocina_despensa_2',
            question: 'Tengo granos pero no soy una planta. Soy blanco pero no es nieve. ¿Qué soy?',
            answer: 'arroz',
            hint: 'Es un alimento básico en muchos países...'
          },
          {
            id: 'cocina_despensa_3',
            question: 'Estoy en todas partes pero no soy aire. Soy esencial para cocinar pero no soy fuego. ¿Qué soy?',
            answer: 'sal',
            hint: 'Se usa para dar sabor a las comidas...'
          },
          {
            id: 'cocina_despensa_4',
            question: 'Tengo hojas pero no soy un árbol. Doy sabor pero no soy especia. ¿Qué soy?',
            answer: 'hierba',
            hint: 'Como el perejil o el cilantro...'
          }
        ],
        nextRoom: 'horno',
        difficulty: 'fácil'
      },
      horno: {
        id: 'horno',
        name: 'Horno Encantado',
        description: 'El calor envuelve la habitación. Un aroma delicioso flota en el aire.',
        puzzles: [
          {
            id: 'cocina_horno_1',
            question: 'Estoy caliente pero no soy sol. Transformo ingredientes pero no soy mago. ¿Qué soy?',
            answer: 'horno',
            hint: 'Cocinas pan y pasteles en mí...'
          },
          {
            id: 'cocina_horno_2',
            question: 'Crezco con calor pero no soy planta. Me infló pero no soy globo. ¿Qué soy?',
            answer: 'pan',
            hint: 'Es un alimento básico que se hornea...'
          },
          {
            id: 'cocina_horno_3',
            question: 'Tengo capas pero no soy cebolla. Soy dulce pero no son caramelos. ¿Qué soy?',
            answer: 'pastel',
            hint: 'Se come en cumpleaños...'
          },
          {
            id: 'cocina_horno_4',
            question: 'Me derrito pero no soy hielo. Soy blanco pero no es leche. ¿Qué soy?',
            answer: 'queso',
            hint: 'Se usa en pizzas y sandwiches...'
          }
        ],
        nextRoom: 'mesa',
        difficulty: 'medio'
      },
      mesa: {
        id: 'mesa',
        name: 'Mesa del Banquete',
        description: 'Una mesa elegante está preparada. Cubiertos brillan bajo la luz.',
        puzzles: [
          {
            id: 'cocina_mesa_1',
            question: 'Tengo dientes pero no como. Corto comida pero no soy cuchillo. ¿Qué soy?',
            answer: 'tenedor',
            hint: 'Lo usas para pinchar la comida...'
          },
          {
            id: 'cocina_mesa_2',
            question: 'Soy redondo pero no soy plato. Contengo líquido pero no soy vaso. ¿Qué soy?',
            answer: 'cuenco',
            hint: 'Se usa para sopas y cereales...'
          },
          {
            id: 'cocina_mesa_3',
            question: 'Tengo hojas pero no soy un libro. Sirvo para limpiar pero no soy paño. ¿Qué soy?',
            answer: 'servilleta',
            hint: 'La usas en la mesa para limpiarte...'
          },
          {
            id: 'cocina_mesa_4',
            question: 'Me pongo pero no soy ropa. Protejo la mesa pero no soy mantel. ¿Qué soy?',
            answer: 'manteles',
            hint: 'Cubren la mesa para comer...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      libertad: {
        id: 'libertad',
        name: '¡LIBERTAD CULINARIA!',
        description: '¡Felicidades! Has resuelto todos los misterios de la cocina.',
        puzzles: [
          {
            id: 'cocina_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  fantasia: {
    id: 'fantasia',
    name: 'Reino Mágico',
    description: 'Acertijos de criaturas míticas y mundos de fantasía',
    icon: <Crown className="w-6 h-6" />,
    color: 'bg-pink-500',
    gradient: 'from-pink-900 via-purple-800 to-indigo-900',
    rooms: {
      castillo: {
        id: 'castillo',
        name: 'Castillo Encantado',
        description: 'Torres imponentes se elevan hacia el cielo. Un guardián mágico bloquea el paso.',
        puzzles: [
          {
            id: 'fantasia_castillo_1',
            question: 'Tengo corona pero no soy rey. Vivo en el castillo pero no soy noble. ¿Qué soy?',
            answer: 'princesa',
            hint: 'Es la hija del rey...'
          },
          {
            id: 'fantasia_castillo_2',
            question: 'Tengo espada pero no soy guerrero. Lucho contra dragones pero no soy caballero. ¿Qué soy?',
            answer: 'héroe',
            hint: 'Es el protagonista de las historias...'
          },
          {
            id: 'fantasia_castillo_3',
            question: 'Tengo trono pero no soy rey. Mando pero no soy emperador. ¿Qué soy?',
            answer: 'rey',
            hint: 'Es donde vive el rey y la reina...'
          },
          {
            id: 'fantasia_castillo_4',
            question: 'Tengo muralla pero no soy fortaleza. Protejo pero no soy escudo. ¿Qué soy?',
            answer: 'castillo',
            hint: 'Es donde vive el rey y la reina...'
          }
        ],
        nextRoom: 'biblioteca_magica',
        difficulty: 'fácil'
      },
      biblioteca_magica: {
        id: 'biblioteca_magica',
        name: 'Biblioteca Mágica',
        description: 'Libros antiguos contienen hechizos olvidados. El conocimiento es poder.',
        puzzles: [
          {
            id: 'fantasia_biblioteca_magica_1',
            question: 'Tengo páginas pero no soy libro. Contengo hechizos pero no soy mago. ¿Qué soy?',
            answer: 'grimorio',
            hint: 'Es un libro de magia muy antiguo...'
          },
          {
            id: 'fantasia_biblioteca_magica_2',
            question: 'Puedo volar pero no tengo alas. Puedo hablar pero no tengo boca. ¿Qué soy?',
            answer: 'bola de cristal',
            hint: 'Los adivinos miran dentro de mí...'
          },
          {
            id: 'fantasia_biblioteca_magica_3',
            question: 'Tengo varita pero no soy mago. Transformo cosas pero no soy alquimista. ¿Qué soy?',
            answer: 'hada',
            hint: 'Es pequeña y tiene alas de mariposa...'
          },
          {
            id: 'fantasia_biblioteca_magica_4',
            question: 'Tengo palabras mágicas pero no soy hechicero. Puedo abrir puertas pero no tengo llaves. ¿Qué soy?',
            answer: 'conjuro',
            hint: 'Los magos los dicen para hacer magia...'
          }
        ],
        nextRoom: 'bosque_encantado',
        difficulty: 'medio'
      },
      bosque_encantado: {
        id: 'bosque_encantado',
        name: 'Bosque Encantado',
        description: 'Árboles susurran secretos. Criaturas mágicas se esconden entre las sombras.',
        puzzles: [
          {
            id: 'fantasia_bosque_encantado_1',
            question: 'Tengo alas pero no soy pájaro. Duermo de día y cazo de noche. ¿Qué soy?',
            answer: 'dragón',
            hint: 'Es una criatura legendaria que escupe fuego...'
          },
          {
            id: 'fantasia_bosque_encantado_2',
            question: 'Tengo cuernos pero no soy toro. Soy pequeño pero no soy niño. ¿Qué soy?',
            answer: 'duende',
            hint: 'Vive en el bosque y cuida tesoros...'
          },
          {
            id: 'fantasia_bosque_encantado_3',
            question: 'Tengo una lámpara pero no soy genio. Puedo conceder deseos pero no soy mago. ¿Qué soy?',
            answer: 'genio',
            hint: 'Vive en una lámpara y da tres deseos...'
          },
          {
            id: 'fantasia_bosque_encantado_4',
            question: 'Tengo arco pero no soy arquero. Tengo flechas pero no cazan. ¿Qué soy?',
            answer: 'cupido',
            hint: 'Hace que las personas se enamoren...'
          }
        ],
        nextRoom: 'cueva_del_dragon',
        difficulty: 'medio'
      },
      cueva_del_dragon: {
        id: 'cueva_del_dragon',
        name: 'Cueva del Dragón',
        description: 'El calor es insoportable. El brillo del oro ilumina la oscuridad.',
        puzzles: [
          {
            id: 'fantasia_cueva_del_dragon_1',
            question: 'Escupe fuego pero no es chimenea. Vuela pero no es avión. ¿Qué soy?',
            answer: 'dragón',
            hint: 'Es una criatura mítica que guarda tesoros...'
          },
          {
            id: 'fantasia_cueva_del_dragon_2',
            question: 'Tengo escamas pero no soy pez. Tengo garras pero no soy león. ¿Qué soy?',
            answer: 'dragón',
            hint: 'En las historias, secuestra princesas...'
          },
          {
            id: 'fantasia_cueva_del_dragon_3',
            question: 'Puedo hablar pero no tengo boca. Puedo volar pero no tengo alas. ¿Qué soy?',
            answer: 'espíritu',
            hint: 'Soy inmaterial y puedo atravesar paredes...'
          },
          {
            id: 'fantasia_cueva_del_dragon_4',
            question: 'Tengo poder pero no soy rey. Tengo magia pero no soy mago. ¿Qué soy?',
            answer: 'artefacto',
            hint: 'Es un objeto mágico con poderes especiales...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      libertad: {
        id: 'libertad',
        name: '¡LIBERTAD MÁGICA!',
        description: '¡Felicidades! Has dominado todos los secretos del reino mágico.',
        puzzles: [
          {
            id: 'fantasia_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  espacio: {
    id: 'espacio',
    name: 'Exploración Espacial',
    description: 'Acertijos sobre el cosmos, planetas y viajes espaciales',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-cyan-500',
    gradient: 'from-cyan-900 via-blue-900 to-indigo-900',
    rooms: {
      'estacion_espacial': {
        id: 'estacion_espacial',
        name: 'Estación Espacial',
        description: 'Flotas en ingravidez mientras las estrellas parpadean en la distancia. Un panel de control requiere un código.',
        puzzles: [
          {
            id: 'espacio_estacion_espacial_1',
            question: 'Tengo orbita pero no soy planeta. Tengo satélites pero no soy luna. ¿Qué soy?',
            answer: 'sistema solar',
            hint: 'Contiene planetas, asteroides y una estrella...'
          },
          {
            id: 'espacio_estacion_espacial_2',
            question: 'Estoy siempre caliente pero no soy fuego. Soy redondo pero no soy pelota. ¿Qué soy?',
            answer: 'sol',
            hint: 'Es la estrella más cercana a la Tierra...'
          },
          {
            id: 'espacio_estacion_espacial_3',
            question: 'Tengo anillos pero no soy casado. Soy gigante pero no soy humano. ¿Qué soy?',
            answer: 'saturno',
            hint: 'Es el sexto planeta del sistema solar...'
          },
          {
            id: 'espacio_estacion_espacial_4',
            question: 'Tengo cráteres pero no soy volcán. Faseo pero no soy luna. ¿Qué soy?',
            answer: 'luna',
            hint: 'Es el satélite natural de la Tierra...'
          }
        ],
        nextRoom: 'nave',
        difficulty: 'fácil'
      },
      'nave': {
        id: 'nave',
        name: 'Nave Exploradora',
        description: 'Controles avanzados y pantallas holográficas iluminan la cabina. El curso está bloqueado.',
        puzzles: [
          {
            id: 'espacio_nave_1',
            question: 'Tengo propelsores pero no soy cohete. Viajo en el vacío pero no soy fantasma. ¿Qué soy?',
            answer: 'nave espacial',
            hint: 'Transporta astronautas por el espacio...'
          },
          {
            id: 'espacio_nave_2',
            question: 'Tengo traje pero no soy modelo. Floto pero no soy globo. ¿Qué soy?',
            answer: 'astronauta',
            hint: 'Explora el espacio exterior...'
          },
          {
            id: 'espacio_nave_3',
            question: 'Tengo telescopio pero no soy astrónomo. Busco señales pero no soy radio. ¿Qué soy?',
            answer: 'antena',
            hint: 'Recibe y transmite información desde el espacio...'
          },
          {
            id: 'espacio_nave_4',
            question: 'Tengo oxígeno pero no soy árbol. Soy esencial para vivir pero no soy agua. ¿Qué soy?',
            answer: 'tanque de oxígeno',
            hint: 'Los astronautas lo usan para respirar...'
          }
        ],
        nextRoom: 'planeta_desconocido',
        difficulty: 'medio'
      },
      'planeta_desconocido': {
        id: 'planeta_desconocido',
        name: 'Planeta Misterioso',
        description: 'Un terreno alienígena se extiende ante ti. Formaciones cristalinas brillan con luz propia.',
        puzzles: [
          {
            id: 'espacio_planeta_desconocido_1',
            question: 'Tengo dos soles pero no soy sistema. Tengo día perpetuo pero no soy tierra. ¿Qué soy?',
            answer: 'planeta binario',
            hint: 'Orbita alrededor de dos estrellas...'
          },
          {
            id: 'espacio_planeta_desconocido_2',
            question: 'Soy gaseoso pero no soy nube. Tengo tormentas pero no soy tormenta eléctrica. ¿Qué soy?',
            answer: 'júpiter',
            hint: 'Es el planeta más grande del sistema solar...'
          },
          {
            id: 'espacio_planeta_desconocido_3',
            question: 'Tengo anhelita pero no soy triste. Soy helado pero no soy helado. ¿Qué soy?',
            answer: 'neptuno',
            hint: 'Es el planeta más lejano del sistema solar...'
          },
          {
            id: 'espacio_planeta_desconocido_4',
            question: 'Tengo vida pero no soy tierra. Tengo agua pero no soy océano. ¿Qué soy?',
            answer: 'exoplaneta',
            hint: 'Planeta fuera de nuestro sistema solar...'
          }
        ],
        nextRoom: 'agujero_negro',
        difficulty: 'medio'
      },
      'agujero_negro': {
        id: 'agujero_negro',
        name: 'Agujero Negro',
        description: 'La gravedad distorsiona el espacio-tiempo. Una última ecuación podría salvar tu viaje.',
        puzzles: [
          {
            id: 'espacio_agujero_negro_1',
            question: 'Todo entra pero nada sale. Tengo gravedad infinita pero no soy planeta. ¿Qué soy?',
            answer: 'agujero negro',
            hint: 'Ni siquiera la luz puede escapar de mí...'
          },
          {
            id: 'espacio_agujero_negro_2',
            question: 'Tengo horizonte pero no soy amanecer. Soy punto de no retorno pero no soy fin. ¿Qué soy?',
            answer: 'horizonte de sucesos',
            hint: 'El límite de un agujero negro...'
          },
          {
            id: 'espacio_agujero_negro_3',
            question: 'Tengo curvatura pero no soy camino. Distorso el tiempo pero no soy reloj. ¿Qué soy?',
            answer: 'espacio-tiempo',
            hint: 'El tejido del universo...'
          },
          {
            id: 'espacio_agujero_negro_4',
            question: 'Tengo singularidad pero no soy único. Tengo densidad infinita pero no soy sólido. ¿Qué soy?',
            answer: 'centro del agujero negro',
            hint: 'El punto donde las leyes físicas se rompen...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      'libertad': {
        id: 'libertad',
        name: '¡LIBERTAD CÓSMICA!',
        description: '¡Felicidades! Has conquistado los misterios del espacio exterior.',
        puzzles: [
          {
            id: 'espacio_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  historia: {
    id: 'historia',
    name: 'Viaje en el Tiempo',
    description: 'Acertijos sobre eventos históricos y civilizaciones antiguas',
    icon: <Clock className="w-6 h-6" />,
    color: 'bg-amber-500',
    gradient: 'from-amber-900 via-yellow-800 to-orange-900',
    rooms: {
      'egipto': {
        id: 'egipto',
        name: 'Antiguo Egipto',
        description: 'Pirámides majestuosas se elevan bajo el sol del desierto. Jeroglíficos cubren las paredes.',
        puzzles: [
          {
            id: 'historia_egipto_1',
            question: 'Tengo base cuadrada pero no soy caja. Tengo cuatro caras triangulares pero no soy montaña. ¿Qué soy?',
            answer: 'pirámide',
            hint: 'Monumento funerario egipcio...'
          },
          {
            id: 'historia_egipto_2',
            question: 'Tengo papiro pero no soy libro. Tengo jeroglíficos pero no soy templo. ¿Qué soy?',
            answer: 'manuscrito',
            hint: 'Escrito antiguo en papel de papiro...'
          },
          {
            id: 'historia_egipto_3',
            question: 'Tengo máscara pero no soy actor. Soy dorado pero no soy sol. ¿Qué soy?',
            answer: 'tutankamón',
            hint: 'Faraón famoso por su máscara dorada...'
          },
          {
            id: 'historia_egipto_4',
            question: 'Tengo cuerpo de león pero no soy león. Tengo cabeza humana pero no soy humano. ¿Qué soy?',
            answer: 'esfinge',
            hint: 'Guardián mítico de las pirámides...'
          }
        ],
        nextRoom: 'roma',
        difficulty: 'fácil'
      },
      'roma': {
        id: 'roma',
        name: 'Imperio Romano',
        description: 'El Coliseo resuena con ecos de gladiadores. Calles empedradas llevan al foro.',
        puzzles: [
          {
            id: 'historia_roma_1',
            question: 'Tengo arcos pero no soy puente. Tengo arena pero no soy playa. ¿Qué soy?',
            answer: 'coliseo',
            hint: 'Anfiteatro donde luchaban gladiadores...'
          },
          {
            id: 'historia_roma_2',
            question: 'Tengo acueductos pero no soy agua. Transporto líquidos pero no soy río. ¿Qué soy?',
            answer: 'sistema de acueductos',
            hint: 'Ingeniería romana para llevar agua...'
          },
          {
            id: 'historia_roma_3',
            question: 'Tengo legiones pero no soy ejército. Tengo águila pero no soy pájaro. ¿Qué soy?',
            answer: 'imperio romano',
            hint: 'Poder que dominó el mundo antiguo...'
          },
          {
            id: 'historia_roma_4',
            question: 'Tengo senado pero no soy democracia. Tengo emperador pero no soy rey. ¿Qué soy?',
            answer: 'gobierno romano',
            hint: 'Sistema político del Imperio Romano...'
          }
        ],
        nextRoom: 'edad_media',
        difficulty: 'medio'
      },
      'edad_media': {
        id: 'edad_media',
        name: 'Edad Media',
        description: 'Castillos imponentes dominan el paisaje. Caballeros con armaduras vigilan los muros.',
        puzzles: [
          {
            id: 'historia_edad_media_1',
            question: 'Tengo murallas pero no soy fortaleza. Tengo foso pero no soy agua. ¿Qué soy?',
            answer: 'castillo',
            hint: 'Residencia medieval fortificada...'
          },
          {
            id: 'historia_edad_media_2',
            question: 'Tengo armadura pero no soy tanque. Tengo espada pero no soy espadachín. ¿Qué soy?',
            answer: 'caballero',
            hint: 'Guerrero montado de la Edad Media...'
          },
          {
            id: 'historia_edad_media_3',
            question: 'Tengo catapulta pero no soy artillería. Tiro piedras pero no soy lanzador. ¿Qué soy?',
            answer: 'máquina de asedio',
            hint: 'Arma para atacar castillos...'
          },
          {
            id: 'historia_edad_media_4',
            question: 'Tengo feudo pero no soy señor. Tengo siervos pero no soy amo. ¿Qué soy?',
            answer: 'sistema feudal',
            hint: 'Organización social medieval...'
          }
        ],
        nextRoom: 'renacimiento',
        difficulty: 'medio'
      },
      'renacimiento': {
        id: 'renacimiento',
        name: 'Renacimiento',
        description: 'Talleres llenos de arte y ciencia. El genio florece en cada obra maestra.',
        puzzles: [
          {
            id: 'historia_renacimiento_1',
            question: 'Tengo pincel pero no soy pintor. Tengo sonrisa pero no soy persona. ¿Qué soy?',
            answer: 'mona lisa',
            hint: 'Cuadro famoso de Leonardo da Vinci...'
          },
          {
            id: 'historia_renacimiento_2',
            question: 'Tengo techo pero no soy casa. Tengo ángeles pero no soy cielo. ¿Qué soy?',
            answer: 'capilla sixtina',
            hint: 'Obra maestra de Miguel Ángel...'
          },
          {
            id: 'historia_renacimiento_3',
            question: 'Tengo inventos pero no soy inventor. Tengo cuadernos pero no soy estudiante. ¿Qué soy?',
            answer: 'leonardo da vinci',
            hint: 'Genio del Renacimiento...'
          },
          {
            id: 'historia_renacimiento_4',
            question: 'Tengo perspectiva pero no soy fotógrafo. Tengo proporción pero no soy matemático. ¿Qué soy?',
            answer: 'arte renacentista',
            hint: 'Estilo artístico del Renacimiento...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      'libertad': {
        id: 'libertad',
        name: '¡LIBERTAD TEMPORAL!',
        description: '¡Felicidades! Has viajado a través de la historia y sobrevivido.',
        puzzles: [
          {
            id: 'historia_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  deportes: {
    id: 'deportes',
    name: 'Desafío Deportivo',
    description: 'Acertijos sobre diferentes deportes y competencias atléticas',
    icon: <Trophy className="w-6 h-6" />,
    color: 'bg-red-500',
    gradient: 'from-red-900 via-orange-800 to-yellow-900',
    rooms: {
      'estadio': {
        id: 'estadio',
        name: 'Estadio Olímpico',
        description: 'La multitud ruge mientras los atletas se preparan. Una medalla espera al campeón.',
        puzzles: [
          {
            id: 'deportes_estadio_1',
            question: 'Tengo red pero no soy pesca. Tengo raqueta pero no soy tenis. ¿Qué soy?',
            answer: 'voleibol',
            hint: 'Deporte que se juega con las manos...'
          },
          {
            id: 'deportes_estadio_2',
            question: 'Tengo balón pero no soy fútbol. Tengo aro pero no soy cesta. ¿Qué soy?',
            answer: 'baloncesto',
            hint: 'Deporte que se juega encestando...'
          },
          {
            id: 'deportes_estadio_3',
            question: 'Tengo pista pero no soy carrera. Tengo clavos pero no soy carpintero. ¿Qué soy?',
            answer: 'zapatilla de atletismo',
            hint: 'Calzado para correr rápido...'
          },
          {
            id: 'deportes_estadio_4',
            question: 'Tengo medalla pero no soy militar. Tengo oro pero no soy joya. ¿Qué soy?',
            answer: 'premio olímpico',
            hint: 'Recompensa para el mejor atleta...'
          }
        ],
        nextRoom: 'gimnasio',
        difficulty: 'fácil'
      },
      'gimnasio': {
        id: 'gimnasio',
        name: 'Gimnasio de Entrenamiento',
        description: 'Pesas y máquinas llenan el espacio. El sudor y el esfuerzo llenan el aire.',
        puzzles: [
          {
            id: 'deportes_gimnasio_1',
            question: 'Tengo pesas pero no soy pescador. Levanto pero no soy elevador. ¿Qué soy?',
            answer: 'halterofilia',
            hint: 'Deporte de levantar pesas...'
          },
          {
            id: 'deportes_gimnasio_2',
            question: 'Tengo barra pero no son barrotes. Hago flexiones pero no soy elástico. ¿Qué soy?',
            answer: 'cinta de correr',
            hint: 'Máquina para correr sin moverse...'
          },
          {
            id: 'deportes_gimnasio_3',
            question: 'Tengo elasticidad pero no soy goma. Hago estiramientos pero no soy yogui. ¿Qué soy?',
            answer: 'banda de resistencia',
            hint: 'Equipo para ejercicios de fuerza...'
          },
          {
            id: 'deportes_gimnasio_4',
            question: 'Tengo músculos pero no soy atleta. Tengo fuerza pero no soy poder. ¿Qué soy?',
            answer: 'entrenador',
            hint: 'Persona que guía a los atletas...'
          }
        ],
        nextRoom: 'pista',
        difficulty: 'medio'
      },
      'pista': {
        id: 'pista',
        name: 'Pista de Atletismo',
        description: 'Carriles perfectamente marcados en la tierra roja. El silbato anuncia el inicio.',
        puzzles: [
          {
            id: 'deportes_pista_1',
            question: 'Tengo vallas pero no soy cerca. Salto pero no soy canguro. ¿Qué soy?',
            answer: 'vallas',
            hint: 'Obstáculos en carrera de atletismo...'
          },
          {
            id: 'deportes_pista_2',
            question: 'Tengo jabalina pero no soy guerrero. Lanzo pero no soy pitcher. ¿Qué soy?',
            answer: 'lanzamiento de jabalina',
            hint: 'Prueba de atletismo de lanzamiento...'
          },
          {
            id: 'deportes_pista_3',
            question: 'Tengo garrocha pero no soy poste. Salto alto pero no soy trampolín. ¿Qué soy?',
            answer: 'salto con garrocha',
            hint: 'Prueba de saltos de atletismo...'
          },
          {
            id: 'deportes_pista_4',
            question: 'Tengo testigo pero no soy policía. Paso pero no soy puerta. ¿Qué soy?',
            answer: 'relevo',
            hint: 'Carrera de equipo en atletismo...'
          }
        ],
        nextRoom: 'campeonato',
        difficulty: 'medio'
      },
      'campeonato': {
        id: 'campeonato',
        name: 'Gran Campeonato',
        description: 'La final más importante. La gloria eterna espera al ganador.',
        puzzles: [
          {
            id: 'deportes_campeonato_1',
            question: 'Tengo trofeo pero no soy cazador. Tengo copa pero no soy bebida. ¿Qué soy?',
            answer: 'campeón',
            hint: 'Ganador de un torneo...'
          },
          {
            id: 'deportes_campeonato_2',
            question: 'Tengo récord pero no soy música. Tengo marca pero no soy tatuaje. ¿Qué soy?',
            answer: 'récord mundial',
            hint: 'Mejor marca en un deporte...'
          },
          {
            id: 'deportes_campeonato_3',
            question: 'Tengo equipo pero no soy herramienta. Tengo uniforme pero no soy soldado. ¿Qué soy?',
            answer: 'deporte de equipo',
            hint: 'Deporte que se juega en grupo...'
          },
          {
            id: 'deportes_campeonato_4',
            question: 'Tengo disciplina pero no soy castigo. Tengo sacrificio pero no soy ritual. ¿Qué soy?',
            answer: 'atleta profesional',
            hint: 'Dedicación completa al deporte...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      'libertad': {
        id: 'libertad',
        name: '¡LIBERTAD DEPORTIVA!',
        description: '¡Felicidades! Eres un verdadero campeón olímpico.',
        puzzles: [
          {
            id: 'deportes_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  musica: {
    id: 'musica',
    name: 'Mundo Musical',
    description: 'Acertijos sobre instrumentos, compositores y melodías',
    icon: <Music className="w-6 h-6" />,
    color: 'bg-violet-500',
    gradient: 'from-violet-900 via-purple-800 to-indigo-900',
    rooms: {
      'sala_conciertos': {
        id: 'sala_conciertos',
        name: 'Sala de Conciertos',
        description: 'Un piano de cola espera en el centro del escenario. Las notas flotan en el aire.',
        puzzles: [
          {
            id: 'musica_sala_conciertos_1',
            question: 'Tengo teclas pero no abro puertas. Tengo cuerdas pero no soy guitarra. ¿Qué soy?',
            answer: 'piano',
            hint: 'Instrumento de teclado blanco y negro...'
          },
          {
            id: 'musica_sala_conciertos_2',
            question: 'Tengo arco pero no soy arquero. Tengo cuerdas pero no soy arpía. ¿Qué soy?',
            answer: 'violín',
            hint: 'Instrumento de cuerda frotada...'
          },
          {
            id: 'musica_sala_conciertos_3',
            question: 'Tengo pedales pero no soy bicicleta. Tengo tubos pero no soy plomería. ¿Qué soy?',
            answer: 'órgano',
            hint: 'Instrumento grande de iglesia...'
          },
          {
            id: 'musica_sala_conciertos_4',
            question: 'Tengo baqueta pero no soy cocinero. Tengo parche pero no soy ropa. ¿Qué soy?',
            answer: 'batería',
            hint: 'Instrumento de percusión...'
          }
        ],
        nextRoom: 'estudio_grabacion',
        difficulty: 'fácil'
      },
      'estudio_grabacion': {
        id: 'estudio_grabacion',
        name: 'Estudio de Grabación',
        description: 'Consolas y micrófonos listos para capturar la perfecta melodía. Mezclas en progreso.',
        puzzles: [
          {
            id: 'musica_estudio_grabacion_1',
            question: 'Tengo micrófono pero no soy cantante. Amplifico pero no soy sonido. ¿Qué soy?',
            answer: 'consola de mezclas',
            hint: 'Equipo para mezclar audio...'
          },
          {
            id: 'musica_estudio_grabacion_2',
            question: 'Tengo auriculares pero no soy radio. Escucho pero no soy oído. ¿Qué soy?',
            answer: 'productor musical',
            hint: 'Persona que crea música...'
          },
          {
            id: 'musica_estudio_grabacion_3',
            question: 'Tengo frecuencia pero no soy radio. Tengo onda pero no soy mar. ¿Qué soy?',
            answer: 'sonido',
            hint: 'Vibración que viaja por el aire...'
          },
          {
            id: 'musica_estudio_grabacion_4',
            question: 'Tengo tempo pero no soy reloj. Tengo ritmo pero no soy baile. ¿Qué soy?',
            answer: 'métrica musical',
            hint: 'Pulso de la música...'
          }
        ],
        nextRoom: 'orquesta',
        difficulty: 'medio'
      },
      'orquesta': {
        id: 'orquesta',
        name: 'Orquesta Sinfónica',
        description: 'Músicos con sus instrumentos listos. El director levanta la batuta.',
        puzzles: [
          {
            id: 'musica_orquesta_1',
            question: 'Tengo batuta pero no soy mago. Dirijo pero no soy gerente. ¿Qué soy?',
            answer: 'director de orquesta',
            hint: 'Líder de los músicos...'
          },
          {
            id: 'musica_orquesta_2',
            question: 'Tengo boquilla pero no soy botella. Tengo pistones pero no soy motor. ¿Qué soy?',
            answer: 'trompeta',
            hint: 'Instrumento de metal brillante...'
          },
          {
            id: 'musica_orquesta_3',
            question: 'Tengo caña pero no soy planta. Tengo llaves pero no abro puertas. ¿Qué soy?',
            answer: 'clarinete',
            hint: 'Instrumento de viento madera...'
          },
          {
            id: 'musica_orquesta_4',
            question: 'Tengo partitura pero no soy libro. Tengo notas pero no soy dinero. ¿Qué soy?',
            answer: 'música escrita',
            hint: 'Representación gráfica de la música...'
          }
        ],
        nextRoom: 'famosos',
        difficulty: 'medio'
      },
      'famosos': {
        id: 'famosos',
        name: 'Salón de la Fama',
        description: 'Retratos de los grandes compositores adornan las paredes. Sus melodías son legendarias.',
        puzzles: [
          {
            id: 'musica_famosos_1',
            question: 'Tengo novena pero no soy secuencia. Tengo sinfonía pero no soy orquesta. ¿Qué soy?',
            answer: 'beethoven',
            hint: 'Compositor sordo famoso...'
          },
          {
            id: 'musica_famosos_2',
            question: 'Tengo flauta mágica pero no soy mago. Tengo óperas pero no soy cantante. ¿Qué soy?',
            answer: 'mozart',
            hint: 'Compositor infantil prodigio...'
          },
          {
            id: 'musica_famosos_3',
            question: 'Tengo guitarra eléctrica pero no soy técnico. Tengo rock pero no soy piedra. ¿Qué soy?',
            answer: 'elvis presley',
            hint: 'Rey del Rock and Roll...'
          },
          {
            id: 'musica_famosos_4',
            question: 'Tengo voz pero no soy hablante. Tengo ritmo pero no soy batería. ¿Qué soy?',
            answer: 'cantante',
            hint: 'Artista que interpreta canciones...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      'libertad': {
        id: 'libertad',
        name: '¡LIBERTAD MUSICAL!',
        description: '¡Felicidades! Has dominado el arte y la ciencia de la música.',
        puzzles: [
          {
            id: 'musica_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  },
  ciencia: {
    id: 'ciencia',
    name: 'Laboratorio Científico',
    description: 'Acertijos sobre experimentos, descubrimientos y fenómenos naturales',
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-lime-500',
    gradient: 'from-lime-900 via-green-800 to-teal-900',
    rooms: {
      'laboratorio_quimica': {
        id: 'laboratorio_quimica',
        name: 'Laboratorio de Química',
        description: 'Matraces y tubos de ensayo contienen líquidos de colores brillantes. El olor a química llena el aire.',
        puzzles: [
          {
            id: 'ciencia_laboratorio_quimica_1',
            question: 'Tengo moléculas pero no soy ser vivo. Tengo enlaces pero no soy cadena. ¿Qué soy?',
            answer: 'compuesto químico',
            hint: 'Unión de elementos químicos...'
          },
          {
            id: 'ciencia_laboratorio_quimica_2',
            question: 'Tengo pH pero no soy medicina. Tengo ácido pero no soy limón. ¿Qué soy?',
            answer: 'solución química',
            hint: 'Mezcla de sustancias químicas...'
          },
          {
            id: 'ciencia_laboratorio_quimica_3',
            question: 'Tengo tabla pero no soy mueble. Tengo elementos pero no soy conjunto. ¿Qué soy?',
            answer: 'tabla periódica',
            hint: 'Organización de los elementos químicos...'
          },
          {
            id: 'ciencia_laboratorio_quimica_4',
            question: 'Tengo reacción pero no soy emocional. Tengo productos pero no soy tienda. ¿Qué soy?',
            answer: 'experimento químico',
            hint: 'Proceso que transforma sustancias...'
          }
        ],
        nextRoom: 'laboratorio_fisica',
        difficulty: 'fácil'
      },
      'laboratorio_fisica': {
        id: 'laboratorio_fisica',
        name: 'Laboratorio de Física',
        description: 'Imanes, bobinas y láseres llenan los bancos de trabajo. Las leyes de la naturaleza esperan ser descubiertas.',
        puzzles: [
          {
            id: 'ciencia_laboratorio_fisica_1',
            question: 'Tengo gravedad pero no soy serio. Tengo masa pero no soy iglesia. ¿Qué soy?',
            answer: 'planeta',
            hint: 'Cuerpo celeste que orbita una estrella...'
          },
          {
            id: 'ciencia_laboratorio_fisica_2',
            question: 'Tengo velocidad pero no soy coche. Tengo aceleración pero no soy coche deportivo. ¿Qué soy?',
            answer: 'movimiento',
            hint: 'Cambio de posición en el tiempo...'
          },
          {
            id: 'ciencia_laboratorio_fisica_3',
            question: 'Tengo electricidad pero no soy rayo. Tengo circuito pero no soy carrera. ¿Qué soy?',
            answer: 'corriente eléctrica',
            hint: 'Flujo de electrones...'
          },
          {
            id: 'ciencia_laboratorio_fisica_4',
            question: 'Tengo onda pero no soy mar. Tengo frecuencia pero no soy radio. ¿Qué soy?',
            answer: 'luz',
            hint: 'Radiación electromagnética visible...'
          }
        ],
        nextRoom: 'laboratorio_biologia',
        difficulty: 'medio'
      },
      'laboratorio_biologia': {
        id: 'laboratorio_biologia',
        name: 'Laboratorio de Biología',
        description: 'Microscopios y muestras biológicas. La vida se revela a nivel celular.',
        puzzles: [
          {
            id: 'ciencia_laboratorio_biologia_1',
            question: 'Tengo ADN pero no soy abogado. Tengo genes pero no soy pantalones. ¿Qué soy?',
            answer: 'célula',
            hint: 'Unidad básica de la vida...'
          },
          {
            id: 'ciencia_laboratorio_biologia_2',
            question: 'Tengo núcleo pero no soy átomo. Tengo membrana pero no soy piel. ¿Qué soy?',
            answer: 'célula eucariota',
            hint: 'Célula con núcleo definido...'
          },
          {
            id: 'ciencia_laboratorio_biologia_3',
            question: 'Tengo evolución pero no soy cambio. Tengo selección pero no soy elección. ¿Qué soy?',
            answer: 'darwin',
            hint: 'Científico de la evolución...'
          },
          {
            id: 'ciencia_laboratorio_biologia_4',
            question: 'Tengo ecosistema pero no soy computadora. Tengo biodiversidad pero no soy zoológico. ¿Qué soy?',
            answer: 'hábitat natural',
            hint: 'Lugar donde viven los seres vivos...'
          }
        ],
        nextRoom: 'observatorio',
        difficulty: 'medio'
      },
      'observatorio': {
        id: 'observatorio',
        name: 'Observatorio Astronómico',
        description: 'Un telescopio gigante apunta hacia las estrellas. El universo revela sus secretos.',
        puzzles: [
          {
            id: 'ciencia_observatorio_1',
            question: 'Tengo galaxia pero no soy chocolate. Tengo estrellas pero no soy cielo. ¿Qué soy?',
            answer: 'universo',
            hint: 'Todo lo que existe...'
          },
          {
            id: 'ciencia_observatorio_2',
            question: 'Tengo telescopio pero no soy espía. Observo pero no soy juez. ¿Qué soy?',
            answer: 'astrónomo',
            hint: 'Científico que estudia el espacio...'
          },
          {
            id: 'ciencia_observatorio_3',
            question: 'Tengo constelación pero no soy grupo. Tengo orión pero no soy cazador. ¿Qué soy?',
            answer: 'mapa estelar',
            hint: 'Representación de las estrellas...'
          },
          {
            id: 'ciencia_observatorio_4',
            question: 'Tengo teoría pero no soy idea. Tengo relatividad pero no soy pariente. ¿Qué soy?',
            answer: 'einstein',
            hint: 'Científico famoso por E=mc²...'
          }
        ],
        nextRoom: 'libertad',
        difficulty: 'difícil'
      },
      'libertad': {
        id: 'libertad',
        name: '¡LIBERTAD CIENTÍFICA!',
        description: '¡Felicidades! Has descubierto los misterios de la ciencia.',
        puzzles: [
          {
            id: 'ciencia_libertad_1',
            question: '',
            answer: '',
            hint: ''
          }
        ],
        nextRoom: '',
        difficulty: 'fácil'
      }
    }
  }
}