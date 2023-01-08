import React, { createContext, useCallback, useState } from 'react'

const DARK_MODE = 'dark_mode'
const DARK_THEME = {
  color: '#fff',
  background: '#093545'
}

const LIGHT_THEME = {
  color: '#224957',
  background: '#E5E5E5'
}

const ThemeMode = {
  getTheme: () => {
    try {
      return JSON.parse(window.localStorage.getItem(DARK_MODE)) === true
    } catch (e) {
      return false
    }
  },
  updateTheme: (value) => {
    try {
      window.localStorage.setItem(DARK_MODE, JSON.stringify(value === true))
    } catch (e) {}
  }
}

export { DARK_THEME, LIGHT_THEME, ThemeMode }

const ThemeContext = createContext({
  mode: 'light',
  toggleMode: () => {}
})
const ThemeContextWrapper = (props) => {
  const [dark, setDark] = useState(ThemeMode.getTheme())
  const theme = dark ? DARK_THEME : LIGHT_THEME

  const toggleMode = useCallback(() => {
    setDark((prevState) => {
      const newState = !prevState
      ThemeMode.updateTheme(newState)
      return newState
    })
  }, [])
  return (
    <ThemeContext.Provider value={{
      mode: theme,
      toggleMode
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextWrapper
