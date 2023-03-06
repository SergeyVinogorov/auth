import React from 'react'
export const ErrorFallback = () => {
  return (
    <div className="app-page">
      <header className="app-header">
        <h1>Something went wrong.</h1>
      </header>
      <a className='app-link app-block' href='/'>To home page</a>
    </div>
  )
}
