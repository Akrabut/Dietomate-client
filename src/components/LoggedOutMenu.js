import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import AuthModal from './AuthModal'

const LoggedOutMenu = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const handleMenuClick = (clickedItem) => {
    setSelected(clickedItem)
    setModalOpen(true)
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
      <AuthModal
        selected={selected}
        setSelected={setSelected}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </Menu.Menu>
  )
}

export default LoggedOutMenu