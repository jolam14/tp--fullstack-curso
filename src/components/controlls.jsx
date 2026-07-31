import { useLanguage } from "../context/themeContext.jsx"

const Controls = ({
  excludeSpaces,
  onToggleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValueChange
}) => {
  const { t } = useLanguage()
  return (
    <div className="checkbox_Box">
      <h3>
        <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={onToggleExcludeSpaces}
        />
        {t('excludeSpaces')}
      </h3>
      <h3>
        <input
          type="checkbox"
          checked={limitCharacter}
          onChange={handleChangeInputLimit}
        />
        {t('setLimit')}
        {limitCharacter &&
          <input
            type="number"
            min="1"
            value={limitValue}
            onChange={handleLimitValueChange}
            style={{ width: "60px", marginLeft: "8px" }}
          />}
      </h3>
    </div>
  )
}
export { Controls }