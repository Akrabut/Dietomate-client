import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const LoginForm = ({ handleModalClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    
    
    setEmail('')
    setPassword('')
    handleModalClose()
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
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
      <Button
        type='submit'
        fluid>
        Log In
      </Button>
    </Form>
  )
}

export default LoginForm