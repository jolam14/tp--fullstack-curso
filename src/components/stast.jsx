import { useLanguage } from "../context/themeContext.jsx"

const Cards = ({ characters, words, sentences }) => {
  const { t } = useLanguage()
  return (
    <>
      <div className="tarjeta tarjeta-violeta">
        <span className="tarjeta-numero">{characters}</span>
        <h4>{t('totalCharacter')}</h4>
      </div>
      <div className="tarjeta tarjeta-naranja">
        <span className="tarjeta-numero">{words}</span>
        <h4>{t('wordCount')}</h4>
      </div>
      <div className="tarjeta tarjeta-coral">
        <span className="tarjeta-numero">{sentences}</span>
        <h4>{t('sentenceCount')}</h4>
      </div>
    </>
  )
}
export { Cards }