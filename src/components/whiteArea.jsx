const WhiteArea = ({ handleChangeTextArea, text }) => {
  return (
    <textarea
      className="cuadro-texto"
      placeholder="Type your text..."
      onChange={handleChangeTextArea}
      value={text}
    ></textarea>
  )
}
export { WhiteArea }