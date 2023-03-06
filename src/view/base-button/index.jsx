import React from 'react'
import './base-button.css'

export const BaseButton = ({ loading, id, ariaLabel, type, text, onClick }) => {
  return (
    <button id={id} type={type} className='base-button' disabled={loading} aria-label={ariaLabel} onClick={onClick}>{text}</button>
  )
}
