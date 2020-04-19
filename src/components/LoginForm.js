import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { login } from '../services/user'
import AuthMessage from './AuthMessage'

const LoginForm = ({ handleModalClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({ header: '', content: '', result: null })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // if login failed display a message and keep modal open
    if (message.result === 'error') {
      setTimeout(() => {
        setMessage({ header: '', content: '', result: null })
      }, 4000)
      return
    } else if (message.result === 'success') {
      setTimeout(() => {
        setEmail('')
        setPassword('')
        setMessage({ header: '', content: '', result: null })
        handleModalClose()
      }, 2000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  const handleResponse = res => {
    res
      ? setMessage({
        header: 'Login successful',
        content: `Hello ${res.user.name}!`,
        result: 'success'
      })
      : setMessage({
        header: 'Login failed',
        content: `Invalid email or password`,
        result: 'error'
      })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email || !password) return
  
    setLoading(true)
    const res = await login({
      email: email,
      password: password,
    })
    handleResponse(res)
    setLoading(false)
  }

  return (
    <Form onSubmit={e => handleSubmit(e)} loading={loading}>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          type='email'
          value={email}
          minLength='5'
          maxLength='40'
          onChange={e => setEmail(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input
          type='password'
          value={password}
          minLength='5'
          maxLength='15'
          onChange={e => setPassword(e.target.value)} />
      </Form.Field>
      <AuthMessage
        result={message.result}
        header={message.header}
        content={message.content}
      />
      <Button
        type='submit'
        fluid>
        Log In
      </Button>
    </Form>
  )
}

export default LoginForm