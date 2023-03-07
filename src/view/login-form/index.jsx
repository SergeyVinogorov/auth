import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from 'hooks'
import { TextInput } from '../text-input'
import { BaseButton } from '../base-button'
import './login-form.css'

export const LoginForm = ({ getAccess, loading }) => {
  const { submitHandler, changeHandler, errors } = useForm(getAccess)

  return (
      <form
        onSubmit={submitHandler}
        className='login-form'
      >
        <fieldset>
          <legend className='visually-hidden'>Fields for sign in</legend>
          <TextInput
            name='login'
            type='text'
            loading={loading}
            errors={errors}
            onChange={changeHandler}
            placeholder='login@mail.com'
            ariaLabel='login-input'
            className='login-field--indent'
            text='Login'
          />
          <TextInput
            name='password'
            type='password'
            loading={loading}
            errors={errors}
            onChange={changeHandler}
            placeholder='password'
            ariaLabel='password-input'
            text='Password'
          />
        </fieldset>
        <fieldset>
          <legend className='visually-hidden'>Actions fields</legend>
          <div className="actions">
              <label htmlFor='remember' className='remember-container'>
                <p className='action-label'>Remember me</p>
                <input type="checkbox" id='remember' name='remember' disabled={loading} onChange={changeHandler} className='action-remember'/>
                <span className='action-checkmark'></span>
              </label>
              <Link role='button' to='/reset' className='action-link'>Forgot password?</Link>
          </div>
          <BaseButton
            id='loginBtn'
            type='submit'
            ariaLabel='submit-input'
            loading={loading}
            text='Login'
          />
        </fieldset>
      </form>
  )
}
