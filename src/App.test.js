import * as React from 'react'
import App from './App.jsx'
import { MemoryRouter, HashRouter } from 'react-router-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { StoreProvider } from './context'

const setup = () => {
  const utils = render(<HashRouter><App /></HashRouter>, { wrapper: StoreProvider })
  const login = utils.getByLabelText('Login')
  const password = utils.getByLabelText('Password')
  const submit = utils.container.querySelector('#loginBtn')
  return {
    login,
    password,
    submit,
    ...utils
  }
}

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: HashRouter })
  // verify page content for default route
  expect(screen.getByText(/Sign in and start managing your candidates!/i)).toBeInTheDocument()
})

test('open the wrong page', () => {
  const badRoute = '/some/route'
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App/>
    </MemoryRouter>
  )
  expect(screen.getByText(/404, not found/i)).toBeInTheDocument()
})

test('it should contain error message with input login / password', () => {
  const { login, password, submit } = setup()
  fireEvent.change(login, { target: { value: 'login' } })
  fireEvent.change(password, { target: { value: 'password' } })
  fireEvent.click(submit)
  setTimeout(() => {
    expect(screen.findByText('The password is not correct')).toBeVisible()
    expect(screen.findByText('The login is not correct')).toBeVisible()
  }, 1000)
})

test('it should contain redirect to home page', () => {
  const { login, password, submit } = setup()
  fireEvent.change(login, { target: { value: 'login@mail.com' } })
  fireEvent.change(password, { target: { value: 'password39892832' } })
  fireEvent.click(submit)
  waitFor(() => {
    expect(screen.getByText(/Congratulations, you are logged in/i)).toBeInTheDocument()
  })
})
test('it should redirect to login', () => {
  const { login, password, submit } = setup()
  fireEvent.change(login, { target: { value: 'login@mail.com' } })
  fireEvent.change(password, { target: { value: 'password39892832' } })
  fireEvent.click(submit)
  waitFor(() => {
    expect(screen.getByText(/Congratulations, you are logged in/i)).toBeInTheDocument()
    const button = screen.getByText(/Sign out/i)
    fireEvent.click(button)
    waitFor(() => {
      expect(screen.getByText(/Sign in and start managing your candidates!/i)).toBeInTheDocument()
    })
  })
})
