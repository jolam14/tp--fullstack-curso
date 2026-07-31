import { themeContextext } from "..themeContext.jsx";
const Header = ({ theme, toggleTheme }) => {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="bar">
      <div className="logo_Grupo">
        <svg className="logo" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="25" cy="18" rx="18" ry="10" fill="#c99dff" />
          <ellipse cx="25" cy="32" rx="18" ry="10" fill="#7c3aed" />
        </svg>
        <h1>{t('title')}</h1>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={toggleLanguage}>{language === "en" ? "ES" : "EN"}</button>
        <button onClick={toggleTheme}>{theme === "dark" ? "🌙" : "☀️"}</button>
      </div>
    </header>
  )
}
export { Header }