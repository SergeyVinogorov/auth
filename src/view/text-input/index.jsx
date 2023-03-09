import React from 'react'

import './text-input.css'

export const TextInput = ({ loading, errors, onChange, name, placeholder, className, text, type }) => {
  return (
    <div className={'field ' + className}>
      <input id={name} name={name} type={type} disabled={loading} placeholder={placeholder} onChange={onChange} className='text-input'/>
      <label htmlFor={name} className='text-label'>{text}</label>
      {errors[name] && <p className='error-message'>{errors[name]}</p>}
    </div>
  )
}
