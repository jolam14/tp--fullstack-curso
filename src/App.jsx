import { useState, useEffect } from "react"
import { Header } from "./components/Header.jsx"
import { WhiteArea } from "./components/whiteArea.jsx"
import { Controls } from "./components/controlls.jsx"
import { Cards } from "./components/stast.jsx"
import { Letters } from "./components/letters.jsx"
import './index.css'
import { useLanguage } from "./context/themeContext.jsx"

const App = () => {
  const [text, setText] = useState("esto es texto de prueba se puede borrar")
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(10)
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"))

  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(s => s.trim() !== "").length

  const { t } = useLanguage()

  const wordsPerMinute = 200
  const minutesEstimate = words / wordsPerMinute
  const secondsEstimate = Math.max(1, Math.ceil(minutesEstimate * 60))
  const readingTimeText = words === 0
    ? `0 ${t('min')}`
    : minutesEstimate < 1
      ? `${secondsEstimate} ${t('sec')}`
      : `${Math.ceil(minutesEstimate)} ${t('min')}`

  const handleChangeArea = (e) => {
    const value = e.target.value
    if (limitCharacter) {
      if (value.length <= limitValue) setText(value)
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

  const cleanText = text.toLowerCase().replace(/[^a-zñáéíóúü1234567890]/g, "")
  const totalLetters = cleanText.length

  const dictionaryLetters = {}
  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  const sortedLetters = Object.entries(dictionaryLetters)
    .map(([char, count]) => ({
      letter: char.toUpperCase(),
      amount: count,
      percentage: totalLetters > 0 ? Number(((count / totalLetters) * 100).toFixed(1)) : 0
    }))
    .sort((a, b) => b.amount - a.amount)

  return (
    <div className="content">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <h2>{t('heading')} <br /> {t('headingBreak')}</h2>

      <WhiteArea handleChangeTextArea={handleChangeArea} text={text} />

      <div className="fila_Text_Bottom">
        <Controls
          excludeSpaces={excludeSpaces}
          onToggleExcludeSpaces={() => setExcludeSpaces(!excludeSpaces)}
          limitCharacter={limitCharacter}
          handleChangeInputLimit={handleChangeInputLimit}
          limitValue={limitValue}
          handleLimitValueChange={handleLimitValueChange}
        />
        <span>{t('readingTime')} {readingTimeText}</span>
      </div>

      <div className="tarjetas-contenedor">
        <Cards characters={characters} words={words} sentences={sentences} />

        <div className="densidad-contenedor">
          <h3 className="titulo-densidad">Letter Density</h3>
          <Letters sortLetters={sortedLetters} />
        </div>
      </div>
    </div>
  )
}
export { App }