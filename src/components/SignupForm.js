import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const SignupForm = ({ handleModalClose }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!email || !password) return
  
    setUsername('')
    setEmail('')
    setPassword('')
    handleModalClose()
  }

  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <Form.Input
          minLength='2'
          maxLength='15'
          value={username}
          onChange={e => setUsername(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          type='email'
          value={email}
          minLength='5'
          maxLength='40'
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input
          type='password'
          value={password}
          minLength='5'
          maxLength='15'
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Field>
      <Form.Button
        type='submit'
        onSubmit={e => handleSubmit(e)}
        fluid>
        Sign Up
      </Form.Button>
    </Form>
  )
}

export default SignupForm