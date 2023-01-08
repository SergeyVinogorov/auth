import './App.css'
import React from 'react'
import ToggleButton from './ToggleButton'

function App () {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Sign inn</h1>
          <p>Sign in and start managing your candidates!</p>
        </header>
        <form action="#">
          <fieldset>
            <legend>Fields for sign inn</legend>
            <label type='email' htmlFor='login'>Login</label>
            <input id='login' name='login'/>
            <label htmlFor='password'>Password</label>
            <input id='password' name='password'/>
          </fieldset>
          <fieldset>
            <legend>Actions fields</legend>
            <div className="actions">
              <input type="checkbox" id='remember' name='remember'/>
              <label htmlFor='remember'>Remember me</label>
              <a role='button' href='#'>Forgot password?</a>
            </div>
            <input type='submit' value='Login'/>
          </fieldset>
        </form>
        <footer>
          <ToggleButton
            toggle={toggleMode}
            isOn={dark}
          />
        </footer>
      </div>
  )
}

export default App
