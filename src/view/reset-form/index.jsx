import React from 'react'

import { useForm } from 'hooks'
import { BaseButton } from '../base-button'
import { TextInput } from '../text-input'

import './reset-form.css'
export const ResetForm = ({ sendReset, isSend, loading }) => {
  const { submitHandler, changeHandler, errors } = useForm(sendReset)

  return (
    <>
      <form
        onSubmit={submitHandler}
        className='login-form'
      >
        <fieldset>
          <legend className='visually-hidden'>Fields for password reset</legend>
          <TextInput
            name='login'
            type='text'
            loading={loading}
            errors={errors}
            onChange={changeHandler}
            placeholder='login@mail.com'
            text='Email'
          />
        </fieldset>
        <fieldset>
          <legend className='visually-hidden'>Actions fields</legend>
          <div className="actions">
            <a role='button' href='/login' className='action-link'>Back to sign in</a>
          </div>
          <BaseButton
            id='resetBtn'
            type='submit'
            loading={loading}
            text='Reset'
          />
        </fieldset>
      </form>
      {isSend ? <p>Success! We are sent you message with instruction of reset password to email</p> : ''}
    </>
  )
}
