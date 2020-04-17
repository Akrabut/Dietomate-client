import React, { useState } from 'react'
import { Modal, Menu, Icon } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const AuthModal = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const handleMenuClick = (clickedItem) => {
    setSelected(clickedItem)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setSelected('')
    setModalOpen(false)
  }

  const renderCorrectForm = () => {
    if (selected === 'login') {
      return <LoginForm />
    } else if (selected === 'signup') {
      return <SignupForm />
    }
  }

  return (
    <Menu.Menu
      position='right'>
      <Menu.Item
        name='Log In'
        content='Log In'
        active={selected === 'login'}
        onClick={() => handleMenuClick('login')}>
      </Menu.Item>
      <Menu.Item
        name='Sign up'
        content='Sign up'
        active={selected === 'signup'}
        onClick={() => handleMenuClick('signup')}>
      </Menu.Item>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}>
        <Menu>
          <Menu.Item
            onClick={() => setSelected('login')}
            active={selected === 'login'}>
            <Icon name='sign in' />
            <p>Log In</p>
          </Menu.Item>
          <Menu.Item
            onClick={() => setSelected('signup')}
            active={selected === 'signup'}>
            <Icon name='write' />
            <p>Sign Up</p>
          </Menu.Item>
        </Menu>
        {renderCorrectForm()}
      </Modal>
    </Menu.Menu>
  )
}

export default AuthModal