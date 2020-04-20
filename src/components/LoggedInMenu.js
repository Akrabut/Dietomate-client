import React from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logout } from '../actions/user'

const LoggedInMenu = props => {
  return (
    <Menu.Menu
      position='right'>
      <Menu.Item
        name='Log Out'
        content='Log Out'
        onClick={() => props.logout()}>
      </Menu.Item>
    </Menu.Menu>
  )
}

const mapDispatchToProps = {
  logout,
}

const connectedLoggedInMenu = connect(null, mapDispatchToProps)(LoggedInMenu)
export default connectedLoggedInMenu