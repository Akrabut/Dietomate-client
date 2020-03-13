import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'

const NavigationBar = () => {
  useEffect(() => {
    // TODO: CHECK IF USER IS LOGGED IN
  }, [])

  return (
    <Menu size={'huge'}>
      <Menu.Item header>
        Dietomate - Automate Your Diet!
      </Menu.Item>
    </Menu>
  )
}

export default NavigationBar