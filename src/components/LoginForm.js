import React, { useState } from 'react'
import { Form, Icon } from 'semantic-ui-react'

const LoginForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' type='email'></input>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' type='password'></input>
      </Form.Field>
    </Form>
  )
}

export default LoginForm