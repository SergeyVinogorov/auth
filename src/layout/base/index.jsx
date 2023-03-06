import React, { useContext } from 'react'

import { ToggleTheme } from 'view'
import { ReactComponent as Wave } from 'static/media/footWave.svg'
import { StoreContext } from 'context'

import './base-layout.css'

export const BaseLayout = ({ children }) => {
  const { darkMode, toggleMode } = useContext(StoreContext)
  return (
    <div className='base-layout'>
      {children}
      <footer className='base-layout-footer'>
        <Wave className={`base-layout-decoration ${darkMode && 'base-layout-decoration-dark'}`}/>
        <ToggleTheme
          toggle={toggleMode}
          isOn={darkMode}
        />
      </footer>
    </div>
  )
}
