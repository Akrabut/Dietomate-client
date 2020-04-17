import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const SignupForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder='username'></input>
      </Form.Field>
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

export default SignupForm