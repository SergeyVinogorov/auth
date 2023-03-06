import React, { createContext, useCallback, useState } from 'react'

import { getBoolLocalData, updateBoolLocalData } from 'lib'

const DARK_MODE = 'dark_mode'
const IS_AUTHENTICATE = 'isAuthenticate'

export const StoreContext = createContext({
  darkMode: false,
  isAuthenticated: false,
  toggleMode: () => {},
  updateAuth: () => {}
})
export const StoreProvider = (props) => {
  const [dark, setDark] = useState(getBoolLocalData(DARK_MODE))
  const [isAuth, setIsAuth] = useState(getBoolLocalData(IS_AUTHENTICATE))
  const [loading, setLoading] = useState(false)

  const toggleMode = useCallback(() => {
    setDark((prevState) => {
      const newState = !prevState
      updateBoolLocalData(DARK_MODE, newState)
      return newState
    })
  }, [])

  const updateAuth = useCallback(() => {
    setIsAuth((prevState) => {
      const newState = !prevState
      updateBoolLocalData(IS_AUTHENTICATE, newState)
      return newState
    })
  }, [])

  return (
    <StoreContext.Provider value={{
      darkMode: dark,
      isAuthenticated: isAuth,
      toggleMode,
      updateAuth,
      loading,
      setLoading
    }}>
      {props.children}
    </StoreContext.Provider>
  )
}
