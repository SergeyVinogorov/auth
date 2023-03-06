import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext } from 'context'
import { FormPageLayout } from 'layout'
import { LoginForm } from 'view'
import { useIsMounted } from 'hooks'
import { loginFakeApi } from 'api/login'
import { PATHS } from 'lib'

export const LoginPage = () => {
  const isMounted = useIsMounted()
  const { updateAuth, loading, setLoading } = useContext(StoreContext)
  const navigate = useNavigate()
  const loginHandler = (values) => {
    setLoading(true)
    loginFakeApi(values).then((resp) => {
      if (isMounted() && resp.authorization) {
        updateAuth()
        setLoading(false)
        navigate(PATHS.home)
      }
    }).catch((error) => {
      console.log(error)
      if (isMounted()) {
        setLoading(false)
      }
    }
    )
  }

  return (
    <FormPageLayout isMounted={isMounted}>
      <div className="app-page">
        <header className="app-header">
          <h1>Sign in</h1>
          <p>Sign in and start managing your candidates!</p>
        </header>
        <LoginForm getAccess={loginHandler} loading={loading} />
      </div>
    </FormPageLayout>
  )
}
