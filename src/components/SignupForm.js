import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import { signupService } from '../services/user'
import { loginService } from '../services/auth'
import AuthMessage from './AuthMessage'
import { login } from '../actions/user'
import { connect } from 'react-redux'

const SignupForm = props => {
  // TODO: refactor to useForm custom hook
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // this could be packaged into an object but the following useeffect will infinitely loop since {} !== {}
  const [messageHeader, setMessageHeader] = useState('')
  const [messageContent, setMessageContent] = useState('')
  const [messageResult, setMessageResult] = useState('')
  const [loading, setLoading] = useState(false)

  const nullifyMessage = () => {
    setMessageHeader('')
    setMessageContent('')
    setMessageResult('')
  }

  useEffect(() => {
    let timedMessage
    // if login failed display a message and keep modal open
    if (messageResult === 'error') {
      timedMessage = setTimeout(() => {
        nullifyMessage()
      }, 4000)
    } else if (messageResult === 'success') {
      timedMessage = setTimeout(() => {
        setUsername('')
        setEmail('')
        setPassword('')
        nullifyMessage()
        props.handleModalClose()
      }, 2000)
    }
    return () => {
      // if modal is closed before settimeout ends
      clearTimeout(timedMessage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageResult])

  // TODO: deal with all this code duplication before i throw up
  const populateMessage = (header, content, result) => {
    setMessageHeader(header)
    setMessageContent(content)
    setMessageResult(result)
  }

  const handleResponse = res => {
    res.name
      ? populateMessage('Registration successful', `Hello ${res.name}!`, 'success')
      : populateMessage('Registration failed', `Email already in use`, 'error')
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)
    const signupRes = await signupService({
      name: username,
      email: email,
      password: password,
    })
    handleResponse(signupRes)
    setLoading(false)
    if (!signupRes) return
    try {
      // log the user in after he registers because having to log in after you had registered is a pain in the ass
      const loginRes = await loginService({
        email: signupRes.email,
        password: password,
      })
      props.login(loginRes.user)
    } catch (err) { return }
  }

  return (
    <Form onSubmit={e => handleSubmit(e)} loading={loading}>
      <Form.Field>
        <label>Name</label>
        <Form.Input
          value={username}
          minLength='2'
          maxLength='15'
          required
          onChange={e => setUsername(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          type='email'
          value={email}
          minLength='5'
          maxLength='40'
          required
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
          required
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Field>
      <AuthMessage
        result={messageResult}
        header={messageHeader}
        content={messageContent}
      />
      <Form.Button
        type='submit'
        fluid
        disabled={username.length < 2 || email.length < 5 || password.length < 5}>
        Sign Up
      </Form.Button>
    </Form>
  )
}

const mapDispatchToProps = {
  login,
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const connectedSignupForm = connect(mapStateToProps, mapDispatchToProps)(SignupForm)
export default connectedSignupForm