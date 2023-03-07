import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link className='app-link app-block' to='/'>Home page</Link>
        </div>
      </BaseLayout>
    </ErrorBoundary>
  )
}
