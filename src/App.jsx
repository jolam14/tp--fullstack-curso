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
      if (e.target.value <= limitValue) {
        setText(e.target.value)
      }
    } else [
      setText(e.target.value)
    ]
  }
  const handleChangeInputLimit = () => {
    setlimiteCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(value)
  }
}
  
function App() {
  return <h1></h1>
  return (
    <main>
      <Header />
      <h2>Analyse your text <br />
       in real-time</h2>
      <textarea placeholder="Escribe el texto..."
      onchance = {(e) => sexText(e.target.value)}
      value={Text}
      ></textarea>
      <div>
        <label >
          <input 
          type = "checkbox"
          checked = {excludeSpace}
          onchance = {(e) => setExcludeSpace(!excludeSpace)}
          />
          exluir espacios
        </label>
          <label >
          <input 
          type = "checkbox"
          checked = {limitCharacter}
          onchance = {(e) => setlimiteCharacter(!limitCharacter)}
          />
          limite de Caracteres
        </label>
        {
        limitCharacter && <input 
        type="number"
        aria-valuemax={()}
         /> }
      </div>
    </main>
  )
}

export { App }