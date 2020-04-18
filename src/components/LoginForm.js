import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const LoginForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <Form.Input placeholder='Email' type='email'></Form.Input>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input placeholder='Password' type='password'></Form.Input>
      </Form.Field>
      <Form.Button
        type='submit'
        onSubmit='handleSubmit'
        fluid>
        Log In
      </Form.Button>
    </Form>
  )
}

export default LoginForm