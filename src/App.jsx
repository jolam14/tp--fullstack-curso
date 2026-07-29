import { useState } from "react"
import { Header } from "./components/Header.jsx"

const App = () => {
  // Variables de estado / State variables
  const [text, setText] = useState("esto es texto de prueba se puede borrar")
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(10)
  const [showAll, setShowAll] = useState(false)

  // Contadores básicos / Basic counters
  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

  // Cálculo de tiempo de lectura / Reading time calculation
  const wordsPerMinute = 200
  const minutesEstimate = words / wordsPerMinute
  const secondsEstimate = Math.max(1, Math.ceil(minutesEstimate * 60))

  const readingTimeText = words === 0
    ? "0 min"
    : minutesEstimate < 1
      ? `${secondsEstimate} seg`
      : `${Math.ceil(minutesEstimate)} min`

  // Funciones de eventos / Event handler functions
  const handleChangeTextarea = (e) => {
    const value = e.target.value
    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } else {
      setText(value)
    }
  }

  const handleChangeInputLimit = () => {
    const newLimitState = !limitCharacter
    setLimitCharacter(newLimitState)
    if (newLimitState && text.length > limitValue) {
      setText(text.slice(0, limitValue))
    }
  }
  const handleLimitValueChange = (e) => {
    const value = Math.max(1, Number(e.target.value))
    setLimitValue(value)
    if (limitCharacter && text.length > value) {
      setText(text.slice(0, value))
    }
  }
  // Limpieza de texto / Text cleanup (solo letras, sin signos ni números)
  const cleanText = text.toLowerCase().replace(/[^a-zñáéíóúü1234567890]/g, "")
  const totalLetters = cleanText.length

  // Diccionario de frecuencia de letras / Letter frequency dictionary
  const dictionaryLetters = {}
  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  // Mapeo a un array de objetos / Mapping to an array of objects
  const lettersInfo = Object.entries(dictionaryLetters).map(([char, count]) => {
    const percentage = totalLetters > 0 ? ((count / totalLetters) * 100).toFixed(1) : "0.0"
    return {
      letter: char.toUpperCase(),
      amount: count,
      percentage: Number(percentage)
    }
  })

  // Orden descendente por cantidad / Descending order by amount
  const sortedLetters = lettersInfo.sort((a, b) => b.amount - a.amount)
  const visibleLetters = showAll ? sortedLetters : sortedLetters.slice(0, 5)

  return (
    <main>
      <Header />
      <h2>Analyse your text <br /> in real-time</h2>

      <textarea
        placeholder="Escribe el texto..."
        onChange={handleChangeTextarea}
        value={text}
      ></textarea>

      <div>
        <label>
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
          />
          excluir espacios
        </label>
        <label>
          <input
            type="checkbox"
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          limite de Caracteres
        </label>
        {limitCharacter &&
          <input
            type="number"
            min="1"
            value={limitValue}
            onChange={handleLimitValueChange}
          />}
      </div>

      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words} </p>
      <p>Cantidad de oraciones: {sentences} </p>
      <p>tiempo de lectura =~ {readingTimeText}</p>

      <section>
        <h2>cantidad de letras</h2>
        <article>
          {sortedLetters.length === 0 ? (
            <p>No hay letras para analizar.</p>
          ) : (
            <>
              {visibleLetters.map(item => (
                <div key={item.letter} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span>{item.letter}</span>
                  <meter min="0" max="100" value={item.percentage}></meter>
                  <span>{item.amount} ({item.percentage}%)</span>
                </div>
              ))}
              {sortedLetters.length > 5 && (
                <button type="button" onClick={() => setShowAll(!showAll)} style={{ marginTop: '15px' }}>
                  {showAll ? "Ver menos letras" : "Ver más letras"}
                </button>
              )}
            </>
          )}
        </article>
      </section>
    </main>
  )
}

export { App }
