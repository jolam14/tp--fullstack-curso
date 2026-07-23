import { useState } from "react"
import { Header } from "./components/Header.jsx"

const App = () => {
  const [text, setText] = useState("esto es texto de prueba se puede borrar")
  
  const [excludeSpace, setExcludeSpace] = useState(false)
  const [limitCharacter, setlimiteCharacter] =userState(false)
  const [limitValue, setLimitValue] = useState(300)
  
  const Character = setExcludeSpace ? text.replace(/\s/g,"").length: text.length 
  
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  
  const senteces = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(senteces => senteces.trim() !== "").length

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
    setlimiteCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }
  
  return (
    <main>
      <Header />
      <h2>Analyse your text <br />
       in real-time</h2>

      <textarea 
      placeholder="Escribe el texto..."
      onChance = {handleChangeTextarea}
      value={Text}
      ></textarea>
      <div>
        <label >
          <input 
          type = "checkbox"
          checked = {excludeSpace}
          onChance = {() => setExcludeSpace(!excludeSpace)}
          />
          excluir espacios
        </label>
        <label >
          <input 
            type = "checkbox"
            checked = {limitCharacter}
            onChance = {handleChangeInputLimit}
          />
          limite de Caracteres
        </label> 
        {
        limitCharacter && 
        <input 
          type="number"
          value = {limitValue}
          onChance = {(e) => setLimitValue(e.target.value)}
         /> }
      </div>
      <p>Cantidad de caracteres: {Character}</p>
      <p>Cantidad de palabras: {words} </p>
      <p>Cantidad de oraciones: {senteces} </p>
    </main>
  )
}

export { App }