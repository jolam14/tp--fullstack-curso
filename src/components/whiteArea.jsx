const WhiteArea = ({ handleChangeTextArea, text }) => {
  return (
    <textarea
      placeholder="Escribe el texto..."
      onChange={handleChangeTextArea}
      value={text}
    ></textarea>
  )
}
export { WhiteArea }