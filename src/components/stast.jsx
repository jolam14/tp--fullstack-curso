const Cards = ({ characters, words, sentences }) => {
  return (
    <>
      <div className="tarjeta tarjeta-violeta">
        <span className="tarjeta-numero">{characters}</span>
        <h4>Total Character</h4>
      </div>
      <div className="tarjeta tarjeta-naranja">
        <span className="tarjeta-numero">{words}</span>
        <h4>Word Count</h4>
      </div>
      <div className="tarjeta tarjeta-coral">
        <span className="tarjeta-numero">{sentences}</span>
        <h4>Sentece Count</h4>
      </div>
    </>
  )
}
export { Cards }