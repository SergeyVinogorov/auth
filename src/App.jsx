import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoginPage, HomePage, ResetPage, ErrorPage } from 'pages'
import { PrivateRoute } from 'view'
import { PATHS } from 'lib'
import { StoreContext } from 'context'

import 'static/styles/App.css'

function App () {
  const { darkMode } = useContext(StoreContext)

  return (
    <div className={`app ${darkMode ? 'app-dark' : ''}`}>
      <Routes>
        <Route path={PATHS.login} element={<LoginPage />} />
        <Route path={PATHS.reset} element={<ResetPage />} />
        <Route path={PATHS.home} element={<PrivateRoute/>}>
             <Route path={PATHS.home} element={<HomePage/>}/>
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
