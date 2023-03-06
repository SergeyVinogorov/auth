import React, { useContext } from 'react'

import { StoreContext } from 'context'
import { BaseLayout } from 'layout'
import { BaseButton, ErrorBoundary } from 'view'

export const HomePage = () => {
  const { updateAuth } = useContext(StoreContext)
  return (
    <ErrorBoundary>
      <BaseLayout>
          <div className="app-page">
            <header className="app-header">
              <h1>Congratulations, you are logged in</h1>
            </header>
            <BaseButton
              id='loginBtn'
              type='text'
              text='Sign out'
              onClick={updateAuth}
            />
        </div>
      </BaseLayout>
    </ErrorBoundary>
  )
}
