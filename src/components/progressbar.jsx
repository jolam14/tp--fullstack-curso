const ProgressBar = ({ value, max = 100 }) => {
  return (
    <progress
      className="barra-progreso-nativa"
      value={value}
      max={max}
    ></progress>
  )
}
export { ProgressBar }