import { Header } from "./components/Header.jsx"

const App = () => {
  const [text, setText] = userState("esto es texto de prueba se puede borrar")
  const [excludeSpace, setExcludeSpace] = useState(false)
  const Character = setExcludeSpace ? text.replace(/\s/g,"").length: text.length 
  const
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
          type="checkbox"
          checked={excludeSpace}

          />
        </label>
      </div>
    </main>
  )
}

export { App }