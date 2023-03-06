import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext } from 'context'
import { FormPageLayout } from 'layout'
import { ResetForm } from 'view'
import { useIsMounted } from 'hooks'
import { resetFakeApi } from 'api'
import { PATHS } from 'lib'

export const ResetPage = () => {
  const isMounted = useIsMounted()
  const { loading, setLoading } = useContext(StoreContext)
  const [isSuccessReset, setIsSuccessReset] = useState(false)
  const navigate = useNavigate()
  const resetHandler = (values) => {
    resetFakeApi(values).then((resp) => {
      if (resp && isMounted()) {
        setIsSuccessReset(true)
        setLoading(false)
        setTimeout(() => { navigate(PATHS.login) }, 1000)
      }
    }).catch((error) => {
      console.log(error)
    }
    )
  }

  return (
    <FormPageLayout isMounted={isMounted}>
      <div className="app-page">
        <header className="app-header">
          <h1>Password reset</h1>
        </header>
        <ResetForm sendReset={resetHandler} isSend={isSuccessReset} loading={loading}/>
      </div>
    </FormPageLayout>
  )
}
