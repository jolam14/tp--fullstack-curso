const Letters = ({ sortLetters }) => {
  return (
    <section>
      <h2>Cantidad de letras</h2>
      <article>
        <ul>
          {sortLetters.slice(0, 5).map(item => (
            <li key={item.letter}>
              <span>{item.letter}</span>
              <meter min="0" max="100" value={item.percentage}></meter>
              <span>{item.amount} ({item.percentage}%)</span>
            </li>
          ))}
        </ul>
      </article>
      {sortLetters.length > 5 && (
        <details>
          <summary>Ver más</summary>
          <ul className="meter-list">
            {sortLetters.slice(5).map(item => (
              <li key={item.letter}>
                <span>{item.letter}</span>
                <meter min="0" max="100" value={item.percentage}></meter>
                <span>{item.amount} ({item.percentage}%)</span>
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  )
}
export { Letters }