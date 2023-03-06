import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { StoreProvider } from 'context/StoreContext.jsx'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Loading } from 'view'
import './static/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StoreProvider>
        <React.Suspense fallback={Loading}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.Suspense>
    </StoreProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
