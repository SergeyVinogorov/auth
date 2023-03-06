import React from 'react'
import { ReactComponent as ToggleIcon } from 'static/media/toggleModeIcon.svg'
import './toggle-theme.css'

export const ToggleTheme = ({ isOn, toggle }) => (
  <button
    type='button'
    role='switch'
    aria-checked={isOn}
    onClick={typeof toggle === 'function' ? toggle : () => {}}
    className='toggle-theme-button'
  >
    <ToggleIcon className={`toggle-theme-icon ${isOn ? 'is-on-dark' : 'is-off-dark'}`}/>
  </button>
)
