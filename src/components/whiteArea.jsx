import { useLanguage } from "../context/themeContext.jsx"

const WhiteArea = ({ handleChangeTextArea, text }) => {
  const { t } = useLanguage()
  return (
    <textarea
      className="cuadro-texto"
      placeholder={t('placeholder')}
      onChange={handleChangeTextArea}
      value={text}
    ></textarea>
  )
}
export { WhiteArea }