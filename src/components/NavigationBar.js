import React, { useState, useEffect } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

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
      <Menu.Menu
        position='right'>
      <Menu.Item
        // as={link}
        name='Login'
        content='Login'
        // onClick
        >
      </Menu.Item>
      <Menu.Item
        // as={link}
        name='Sign up'
        content='Sign up'
      // onClick
      >
      </Menu.Item>
      </Menu.Menu>
    </Sidebar>
  )
}

export default NavigationBar