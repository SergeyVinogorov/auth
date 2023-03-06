import { useState } from 'react'

import { customOmit, validate } from 'lib'

export const useForm = (callback) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  /**
   * Validating each keys
   * @param valuesKeys: string[]
   * @return boolean
   */
  const validateValuesHandler = (valuesKeys) => {
    let isValid = true
    if (valuesKeys.length) {
      const validated = {}
      valuesKeys.forEach(key => {
        const valueValidated = validate(key, values[key])
        if (valueValidated) {
          isValid = false
          Object.assign(validated, valueValidated)
        }
      })
      setErrors(validated)
    } else {
      isValid = false
      setErrors({
        login: 'The login is not correct',
        password: 'The password is not correct'
      })
    }
    return isValid
  }

  /**
   * Get values validate it. set values in state if exist errors set in error state
   * @param event: React.FormEvent<HTMLInputElement>
   * @return void
   */
  const changeHandler = (event) => {
    const name = event.target.name
    const val = event.target.value
    if (Object.keys(errors).length !== 0) {
      const validatedValue = validate(name, val)
      if (validatedValue) {
        setErrors({
          ...errors,
          [name]: validatedValue[name]
        })
      } else {
        setErrors(customOmit(errors, name))
      }
    }
    setValues({
      ...values,
      [name]: val
    })
  }

  /**
   * Get the values from event validate it using validateValuesHandler func
   * @param event: React.FormEvent<HTMLInputElement>
   * @return void
   */
  const submitHandler = (event) => {
    event.preventDefault()
    const valuesKeys = Object.keys(values)
    const isAllValueValid = validateValuesHandler(valuesKeys)
    if (isAllValueValid) {
      callback(values)
    }
  }
  return { errors, values, changeHandler, submitHandler }
}
