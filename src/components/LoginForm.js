import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import AuthMessage from './AuthMessage'
import { login } from '../actions/user'
import { connect } from 'react-redux'

const LoginForm = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [message, setMessage] = useState({ header: '', content: '', result: null })
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
        // setMessage({ header: '', content: '', result: null })
        nullifyMessage()
      }, 4000)
      return
    } else if (messageResult === 'success') {
      timedMessage = setTimeout(() => {
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

  const populateMessage = (header, content, result) => {
    setMessageHeader(header)
    setMessageContent(content)
    setMessageResult(result)
  }

  const handleResponse = () => {
    if (props.user.name) {
      populateMessage('Login successful', `Hello ${props.user.name}!`, 'success')
      // setMessage({
      //   header: 'Login successful',
      //   content: `Hello ${props.user.name}!`,
      //   result: 'success'
      // })
    } else {
      populateMessage('Login failed', `Invalid email or password`, 'error')
      // setMessage({
      //   header: 'Login failed',
      //   content: `Invalid email or password`,
      //   result: 'error'
      // })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email || !password) return

    setLoading(true)
    await props.login({
      email: email,
      password: password,
    })
    console.log(props.user);
    handleResponse()
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
        result={messageResult}
        header={messageHeader}
        content={messageContent}
      />
      <Button
        type='submit'
        fluid>
        Log In
      </Button>
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

const connectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default connectedLoginForm