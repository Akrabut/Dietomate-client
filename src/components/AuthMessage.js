import React from 'react'
import { Message } from 'semantic-ui-react'

const AuthMessage = ({ result, header, content }) => {
  if (!content) return null
  return (
    <Message
      positive={result === 'success'}
      negative={result === 'error'}
      header={header}
      content={content}
    />
  )
}

export default AuthMessage