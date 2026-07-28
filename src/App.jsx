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
  const cleanText = text.toLowerCase().replace(/[^a-z]/g, "")
  const

  const dictionaryLetters = {test: 1}

  const propiedadNueva = prompt("Ingrese el nombre de la propiedad nueva")

  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) +1
  })

  const letter = Object.entries(dictionaryLetters).map(dataletter => ){
    const letter = dataLetter[0]
    const amountLetter = dataLetter[1]
  }
  const infoToRenderLetter ={

  }
  
  return (
    <main>
      <Header />
      <h2>Analyse your text <br />
       in real-time</h2>

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
          onChange = {(e) => setLimitValue(e.target.value)}
         /> }
      </div>
      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words} </p>
      <p>Cantidad de oraciones: {sentences} </p>
      <p>tiempo de lectura =~ {readingtime}</p>
      <section>
        <h2>cantidad de letras</h2>
        <article>
          letters.map(letter =><div>
            <span>{letter.letter}</span>
            <meter min = "0" max="100" value="60"></meter>
            <span>{letter.amoun}100%</span>
          </div>)
        </article>
      </section>
    </main>
  )
}

export { App }