import { useState } from "react"
import { ProgressBar } from "./progressbar.jsx"

const Letters = ({ sortLetters }) => {
  const [showAll, setShowAll] = useState(false)
  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)
    
  if (sortLetters.length === 0) return <p>No letters to analyze.</p>

  return (
    <>
      {visibleLetters.map(item => (
        <div className="densidad-fila" key={item.letter}>
          <h6>{item.letter}</h6>
          <ProgressBar value={item.percentage} />
          <span className="densidad-numero">{item.amount} ({item.percentage}%)</span>
        </div>
      ))}
      {sortLetters.length > 5 && (
        <button type="button" className="ver-mas-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See less ▲" : "See more ▼"}
        </button>
      )}
    </>
  )
}
export { Letters }