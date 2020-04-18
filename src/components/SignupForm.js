import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const SignupForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <Form.Input placeholder='username'></Form.Input>
      </Form.Field>
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
        Sign Up
      </Form.Button>
    </Form>
  )
}

export default SignupForm