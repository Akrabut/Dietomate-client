import React, { useEffect } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import AuthModal from './AuthModal'

const NavigationBar = () => {
  useEffect(() => {
    // TODO: CHECK IF USER IS LOGGED IN
  }, [])

  return (
    <Sidebar
      as={Menu}
      size='huge'
      animation='overlay'
      stackable
      visible
      direction='top'>
      <Menu.Item header>
        <Icon name='lemon outline' />
        <p>Dietomate - Automate Your Diet!</p>
      </Menu.Item>
      <AuthModal />
    </Sidebar>
  )
}

export default NavigationBar