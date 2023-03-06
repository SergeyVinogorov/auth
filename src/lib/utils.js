import { EMAIL_PATTERN, PASSWORD_PATTERN } from './constants'

export function getBoolLocalData (key) {
  try {
    return JSON.parse(window.localStorage.getItem(key)) === true
  } catch (e) {
    return false
  }
}
export function updateBoolLocalData (key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value === true))
  } catch (e) {}
}

/**
 * Get target object return without passed name of field in object
 * @param obj: object
 * @param key: string
 * @return object
 */
export function customOmit (obj, key) {
  const noOmitKeys = Object.keys(obj).filter(objKey => objKey !== key)
  const result = {}
  noOmitKeys.forEach((noOmitKey) => {
    result[noOmitKey] = obj[noOmitKey]
  })
  return result
}

/**
 * Validate the passed value
 * @param name: string
 * @param value: string
 * @return {{login: string}|null|{password: string}}
 */
export const validate = (name, value) => {
  switch (name) {
    case 'login':
      if (!new RegExp(EMAIL_PATTERN).test(value)) {
        return {
          login: 'The login is not correct'
        }
      }
      break
    case 'password':
      if (!new RegExp(PASSWORD_PATTERN).test(value)) {
        return {
          password: 'The password is not correct'
        }
      }
      break
    default:
      return null
  }
}
