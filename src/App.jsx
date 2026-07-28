import { useState } from "react"
import { Header } from "./components/Header.jsx"

const App = () => {
  const [text, setText] = useState("esto es texto de prueba se puede borrar")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(10)
  
  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length
  const readingtime = Math.ceil(words/200)



  const handleChangeTextarea = (e) => {
    const value = e.target.value
    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } 
    else {
      setText(value)
    }
  }

  const handleChangeInputLimit = () => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }
  const handleLimitValueChange = (e) => {
    const value = Number(e.target.value)
    setLimitValue(value)
    if (limitCharacter && text.length >value){
      setText(text.slice(0, value))
    }
  }
  const cleanText = text.toLowerCase().replace(/[^a-zñáéíóúü]/g, "")
  const totalLetters = cleanText.length

  const dictionaryLetters = {}

  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) +1
  })

const lettersInfo = Object.entries(dictionaryLetters).map(([char, count]) => {
    const percentage = totalLetters > 0 ? ((count / totalLetters) * 100).toFixed(1) : 0
    return {
      letter: char.toUpperCase(),
      amount: count,
      percentage
    }
  })
  
  return (
    <main>
      <Header />
      <h2>Analyse your text <br /> in real-time</h2>
      
      <textarea 
      placeholder = "Escribe el texto..."
      onChange = {handleChangeTextarea}
      value = {text}
      ></textarea>
      <div>
        <label >
          <input 
          type = "checkbox"
          checked = {excludeSpaces}
          onChange = {() => setExcludeSpaces(!excludeSpaces)}
          />
          excluir espacios
        </label>
        <label >
          <input 
            type = "checkbox"
            checked = {limitCharacter}
            onChange = {handleChangeInputLimit}
          />
          limite de Caracteres
        </label> 
        {
        limitCharacter && 
        <input 
          type = "number"
          value = {limitValue}
          onChange = {handleLimitValueChange}
         /> }
      </div>
      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words} </p>
      <p>Cantidad de oraciones: {sentences} </p>
      <p>tiempo de lectura =~ {readingtime}</p>
      <section>
        <h2>cantidad de letras</h2>
        <article>
            {lettersInfo.length === 0 ? (
            <p>No hay letras para analizar.</p>
          ) : (
            lettersInfo.map(({ letter, amount, percentage }) => (
              <div key={letter} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span>{letter}</span>
                <meter min="0" max="100" value={percentage}></meter>
                <span>{amount} ({percentage}%)</span>
              </div>
            ))
          )}
        </article>
      </section>
    </main>
  )
}

export { App }