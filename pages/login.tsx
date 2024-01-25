// pages/LoginSignupPage.tsx
import React, { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { UserCredentials } from '../types'

const LoginSignupPage: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: '',
    password: '',
    userType: 'goer',
  })
  const [error, setError] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/login', credentials)
      if (response.data.success) {
        Router.push('/dashboard')
      } else {
        setError(response.data.message)
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/signup', credentials)
      if (response.data.success) {
        Router.push('/dashboard')
      } else {
        setError(response.data.message)
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="login-signup-form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <select
        name="userType"
        value={credentials.userType}
        onChange={handleChange}
      >
        <option value="goer">Convention Goer</option>
        <option value="organizer">Convention Organizer</option>
      </select>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

export default LoginSignupPage
