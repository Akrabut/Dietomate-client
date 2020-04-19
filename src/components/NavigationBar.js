import React, { useEffect } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import LoggedOutMenu from './LoggedOutMenu'
import LoggedInMenu from './LoggedInMenu'

const NavigationBar = () => {

  const displayCorrectMenu = () => {
    return window.localStorage.getItem('loggedDietomateUsername')
      ? <LoggedInMenu />
      : <LoggedOutMenu />
  }

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
      {displayCorrectMenu()}
    </Sidebar>
  )
}

export default NavigationBar