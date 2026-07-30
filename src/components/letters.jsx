import { useState } from "react"

const Letters = ({ sortLetters }) => {
  const [showAll, setShowAll] = useState(false)

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)

  return (
    <section>
      <h2>Cantidad de letras</h2>
      <article>
        {sortLetters.length === 0 ? (
          <p>No hay letras para analizar.</p>
        ) : (
          <>
            <ul>
              {visibleLetters.map(item => (
                <li key={item.letter}>
                  <span>{item.letter}</span>
                  <meter min="0" max="100" value={item.percentage}></meter>
                  <span>{item.amount} ({item.percentage}%)</span>
                </li>
              ))}
            </ul>
            {sortLetters.length > 5 && (
              <button type="button" onClick={() => setShowAll(!showAll)}>
                {showAll ? "Ver menos letras" : "Ver más letras"}
              </button>
            )}
          </>
        )}
      </article>
    </section>
  )
}
export { Letters }