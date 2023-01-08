import React from 'react'
const ToggleButton = ({ isOn, toggle }) => (
  <button
    type='button'
    role='switch'
    aria-checked={isOn}
    onClick={typeof toggle === 'function' ? toggle : () => {}}
  >
    toggle
  </button>
)

export default ToggleButton
