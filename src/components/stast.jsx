const Stats = ({ characters, words, sentences, readingTimeText }) => {
  return (
    <>
      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words}</p>
      <p>Cantidad de oraciones: {sentences}</p>
      <p>tiempo de lectura =~ {readingTimeText}</p>
    </>
  )
}
export { Stats }