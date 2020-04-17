import React, { useState } from 'react'
import { Modal, Menu, Icon } from 'semantic-ui-react'
import LoginForm from './LoginForm'

const AuthModal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Menu.Item
      name='Login'
      onClick={() => setModalOpen(true)}>
      <p>Login</p>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}>
        <Menu>
          <Menu.Item>
            <Icon name='sign in' />
            <p>Login</p>
        </Menu.Item>
          <Menu.Item>
            <Icon name='write' />
            <p>Sign Up</p>
          </Menu.Item>
        </Menu>
        <LoginForm/>
      </Modal>
    </Menu.Item>
  )
}

export default AuthModal