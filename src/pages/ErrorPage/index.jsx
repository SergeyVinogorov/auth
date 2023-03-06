import React from 'react'

import { BaseLayout } from 'layout'
import { ErrorBoundary } from 'view'

export const ErrorPage = () => {
  return (
    <ErrorBoundary>
      <BaseLayout>
        <div className="app-page">
          <header className="app-header">
            <h1>404, not found</h1>
          </header>
          <a className='app-link app-block' href='/'>Home page</a>
        </div>
      </BaseLayout>
    </ErrorBoundary>
  )
}
