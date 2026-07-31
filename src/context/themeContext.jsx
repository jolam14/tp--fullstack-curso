import { createContext, useContext, useState } from "react"

const translations = {
  en: {
    title: "Character Counter",
    heading: "Analyze your text",
    headingBreak: "in real-time",
    placeholder: "Type your text...",
    excludeSpaces: "Exclude Spaces",
    setLimit: "Set Character Limit",
    readingTime: "Approx Reading Time <",
    min: "min",
    sec: "sec",
    totalCharacter: "Total Character",
    wordCount: "Word Count",
    sentenceCount: "Sentence Count",
    letterDensity: "Letter Density",
    noLetters: "No letters to analyze.",
    seeMore: "See more",
    seeLess: "See less"
  },
  es: {
    title: "Contador de Caracteres",
    heading: "Analiza tu texto",
    headingBreak: "en tiempo real",
    placeholder: "Escribe el texto...",
    excludeSpaces: "Excluir espacios",
    setLimit: "Límite de caracteres",
    readingTime: "Tiempo de lectura aprox. <",
    min: "min",
    sec: "seg",
    totalCharacter: "Total de caracteres",
    wordCount: "Cantidad de palabras",
    sentenceCount: "Cantidad de oraciones",
    letterDensity: "veces que se repite una letras",
    noLetters: "No hay letras para analizar.",
    seeMore: "Ver más",
    seeLess: "Ver menos"
  }
}

const LanguageContext = createContext(null)

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => setLanguage(prev => (prev === "en" ? "es" : "en"))
  const t = (key) => translations[language][key] ?? key

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }