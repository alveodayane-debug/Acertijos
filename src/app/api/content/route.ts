import { NextRequest, NextResponse } from 'next/server'

interface Content {
  id: string
  text: string
  type: 'frase' | 'acertijo' | 'curiosidad'
  category: string
  author?: string
  answer?: string
}

const frasesMotivacionales = [
  { text: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
  { text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", author: "Albert Schweitzer" },
  { text: "Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de alguien más.", author: "Steve Jobs" },
  { text: "El futuro pertenece a quienes creen en la belleza de sus sueños.", author: "Eleanor Roosevelt" },
  { text: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.", author: "Proverbio chino" },
  { text: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" },
  { text: "La vida es lo que te sucede mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
  { text: "El único imposible es aquello que no intentas.", author: "Anónimo" },
  { text: "Cada día es una nueva oportunidad para cambiar tu vida.", author: "Anónimo" },
  { text: "El coraje no es la ausencia de miedo, sino el triunfo sobre él.", author: "Nelson Mandela" },
  { text: "Sé tú mismo; todos los demás ya están ocupados.", author: "Oscar Wilde" },
  { text: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
  { text: "No esperes. El momento nunca será perfecto.", author: "Napoleon Hill" },
  { text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", author: "Robert Collier" },
  { text: "La vida es 10% lo que me sucede y 90% cómo reacciono a ello.", author: "Charles Swindoll" }
]

const frasesFilosoficas = [
  { text: "Solo sé que no sé nada.", author: "Sócrates" },
  { text: "Pienso, luego existo.", author: "René Descartes" },
  { text: "Dios ha muerto.", author: "Friedrich Nietzsche" },
  { text: "El hombre es un lobo para el hombre.", author: "Plauto" },
  { text: "Conócete a ti mismo.", author: "Oráculo de Delfos" },
  { text: "La vida debe ser comprendida hacia atrás, pero debe ser vivida hacia adelante.", author: "Søren Kierkegaard" },
  { text: "El infierno son los otros.", author: "Jean-Paul Sartre" },
  { text: "El hombre es una cuerda tendida entre el animal y el superhombre.", author: "Friedrich Nietzsche" },
  { text: "Existir precede a la esencia.", author: "Jean-Paul Sartre" },
  { text: "La sabiduría comienza en la admiración.", author: "Platón" }
]

const acertijos = [
  { text: "Tengo ciudades, pero no casas. Tengo montañas, pero no árboles. Tengo agua, pero no peces. ¿Qué soy?", answer: "Un mapa" },
  { text: "Cuanto más quitas, más grande se vuelve. ¿Qué es?", answer: "Un agujero" },
  { text: "Tengo ojos, pero no puedo ver. ¿Qué soy?", answer: "Una papa" },
  { text: "Siempre corro pero nunca camino. Tengo una boca pero nunca hablo. ¿Qué soy?", answer: "Un río" },
  { text: "Tengo llaves pero no cerraduras. Tengo espacio pero no habitaciones. Puedes entrar pero no salir. ¿Qué soy?", answer: "Un teclado" },
  { text: "Tengo un cuello pero no cabeza. Tengo un cuerpo pero no piernas. ¿Qué soy?", answer: "Una botella" },
  { text: "Cuanto más blanco soy, más sucio me pongo. ¿Qué soy?", answer: "Una pizarra" },
  { text: "Tengo dientes pero no puedo comer. ¿Qué soy?", answer: "Un peine" },
  { text: "Siempre subo pero nunca bajo. ¿Qué soy?", answer: "Tu edad" },
  { text: "Tengo hojas pero no soy un árbol. Tengo espina pero no soy un puercoespín. ¿Qué soy?", answer: "Un libro" },
  { text: "Puedo ser roto sin ser tocado. ¿Qué soy?", answer: "Una promesa" },
  { text: "Tengo una cama pero nunca duermo. Tengo una boca pero nunca hablo. ¿Qué soy?", answer: "Un río" },
  { text: "Siempre tengo hambre, debo ser alimentado constantemente. El dedo que me alimenta pronto se volverá rojo. ¿Qué soy?", answer: "Fuego" },
  { text: "Tengo ciudades sin gente, montañas sin árboles y agua sin peces. ¿Qué soy?", answer: "Un mapa" },
  { text: "Puedo viajar por el mundo mientras permanezco en una esquina. ¿Qué soy?", answer: "Un sello" }
]

const curiosidades = [
  { text: "Los pulpos tienen tres corazones y sangre azul." },
  { text: "Un día en Venus es más largo que un año en Venus." },
  { text: "Los tiburones son más viejos que los árboles." },
  { text: "Existen más estrellas en el universo que granos de arena en todas las playas de la Tierra." },
  { text: "Las medusas turritopsis dohrnii son inmortales." },
  { text: "El corazón de una ballena azul es tan grande que un humano podría nadar por sus arterias." },
  { text: "Los humanos comparten el 50% de su ADN con los plátanos." },
  { text: "Existen más bacterias en tu cuerpo que células humanas." },
  { text: "El colibrí es el único pájaro que puede volar hacia atrás." },
  { text: "Los elefantes son los únicos animales que no pueden saltar." },
  { text: "Un grupo de flamencos se llama 'colonelato'." },
  { text: "Los koalas duermen 22 horas al día." },
  { text: "El lenguaje humano más complejo es el de los bosquimanos !Kung." },
  { text: "Los cangrejos pueden caminar en cualquier dirección, pero prefieren hacerlo de lado." },
  { text: "El cerebro humano usa más energía que una bombilla LED." }
]

const datosHistoricos = [
  { text: "La Gran Muralla China no es visible desde la Luna sin ayuda de instrumentos." },
  { text: "Las pirámides de Egipto fueron construidas por trabajadores, no por esclavos." },
  { text: "Vikingos descubrieron América 500 años antes que Colón." },
  { text: "Los romanos usaban orina como enjuague bucal." },
  { text: "Cleopatra vivió más cerca en tiempo de la Luna que de la construcción de las pirámides." },
  { text: "La guerra más corta de la historia duró 38 minutos." },
  { text: "Los soldados romanos recibían un salario en sal." },
  { text: "El Oxford University es más antiguo que el Imperio Azteca." },
  { text: "Las zanahorias originalmente eran moradas." },
  { text: "En la Edad Media, la gente dormía sentada." }
]

function generarId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}

function obtenerContenidoAleatorio(): Content {
  const categorias = [
    { 
      tipo: 'frase', 
      subcategoria: 'Motivacional', 
      datos: frasesMotivacionales 
    },
    { 
      tipo: 'frase', 
      subcategoria: 'Filosófica', 
      datos: frasesFilosoficas 
    },
    { 
      tipo: 'acertijo', 
      subcategoria: 'Clásico', 
      datos: acertijos 
    },
    { 
      tipo: 'curiosidad', 
      subcategoria: 'Naturaleza', 
      datos: curiosidades 
    },
    { 
      tipo: 'curiosidad', 
      subcategoria: 'Historia', 
      datos: datosHistoricos 
    }
  ]

  const categoriaSeleccionada = categorias[Math.floor(Math.random() * categorias.length)]
  const itemSeleccionado = categoriaSeleccionada.datos[Math.floor(Math.random() * categoriaSeleccionada.datos.length)]

  return {
    id: generarId(),
    text: itemSeleccionado.text,
    type: categoriaSeleccionada.tipo as 'frase' | 'acertijo' | 'curiosidad',
    category: categoriaSeleccionada.subcategoria,
    ...(itemSeleccionado.author && { author: itemSeleccionado.author }),
    ...(itemSeleccionado.answer && { answer: itemSeleccionado.answer })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    
    let contenido: Content
    
    if (type === 'frase') {
      // Solo frases motivacionales y filosóficas
      const categoriasFrases = [
        { 
          tipo: 'frase', 
          subcategoria: 'Motivacional', 
          datos: frasesMotivacionales 
        },
        { 
          tipo: 'frase', 
          subcategoria: 'Filosófica', 
          datos: frasesFilosoficas 
        }
      ]
      const categoriaSeleccionada = categoriasFrases[Math.floor(Math.random() * categoriasFrases.length)]
      const itemSeleccionado = categoriaSeleccionada.datos[Math.floor(Math.random() * categoriaSeleccionada.datos.length)]
      
      contenido = {
        id: generarId(),
        text: itemSeleccionado.text,
        type: categoriaSeleccionada.tipo,
        category: categoriaSeleccionada.subcategoria,
        ...(itemSeleccionado.author && { author: itemSeleccionado.author })
      }
    } else if (type === 'acertijo') {
      // Solo acertijos
      const itemSeleccionado = acertijos[Math.floor(Math.random() * acertijos.length)]
      contenido = {
        id: generarId(),
        text: itemSeleccionado.text,
        type: 'acertijo',
        category: 'Clásico',
        answer: itemSeleccionado.answer
      }
    } else {
      // Contenido aleatorio completo
      contenido = obtenerContenidoAleatorio()
    }
    
    return NextResponse.json(contenido, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error generating content:', error)
    return NextResponse.json(
      { error: 'Error generating content' },
      { status: 500 }
    )
  }
}