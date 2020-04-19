import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Modal, Menu, Icon, Header } from 'semantic-ui-react'

const AuthModal = ({ selected, setSelected, modalOpen, setModalOpen }) => {
  const handleModalClose = () => {
    setSelected('')
    setModalOpen(false)
  }

  const renderCorrectForm = () => {
    if (selected === 'login') {
      return <LoginForm handleModalClose={handleModalClose} />
    } else if (selected === 'signup') {
      return <SignupForm handleModalClose={handleModalClose} />
    }
  }

  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      size='mini'>
      <Header textAlign='center' style={{ borderBottom: 0 }}>
        Log In to Dietomate
        </Header>
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
      <article style={{ margin: '5%' }}>
        {renderCorrectForm()}
      </article>
    </Modal>
  )
}

export default AuthModal