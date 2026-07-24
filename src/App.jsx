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
    </main>
  )
}

export { App }