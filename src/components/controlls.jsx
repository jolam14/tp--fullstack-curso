const Controls = ({
  excludeSpaces,
  onToggleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValueChange
}) => {
  return (
    <div className="checkbox_Box">
      <h3>
        <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={onToggleExcludeSpaces}
        />
        Exclude Spaces
      </h3>
      <h3>
        <input
          type="checkbox"
          checked={limitCharacter}
          onChange={handleChangeInputLimit}
        />
        Set Character Limit
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