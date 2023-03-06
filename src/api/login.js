/**
 * Imitation of request login
 * @param data
 * @return {Promise<unknown>}
 */
export const loginFakeApi = (data) => new Promise((resolve, reject) => {
  if (!data.login || !data.password) {
    reject(new Error('Authorization should be with fields login and password'))
  }
  setTimeout(() => resolve({ authorization: true }), 3000)
})

/**
 * Imitation of request reset password
 * @param data
 * @return {Promise<unknown>}
 */
export const resetFakeApi = (data) => new Promise((resolve, reject) => {
  if (!data.login) {
    reject(new Error('Authorization should be with fields login and password'))
  }
  setTimeout(() => resolve(true), 3000)
})
