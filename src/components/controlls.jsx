const Controls = ({
  excludeSpaces,
  onToggleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValueChange
}) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={onToggleExcludeSpaces}
        />
        excluir espacios
      </label>
      <label>
        <input
          type="checkbox"
          checked={limitCharacter}
          onChange={handleChangeInputLimit}
        />
        limite de Caracteres
      </label>
      {limitCharacter &&
        <input
          type="number"
          min="1"
          value={limitValue}
          onChange={handleLimitValueChange}
        />}
    </div>
  )
}
export { Controls }