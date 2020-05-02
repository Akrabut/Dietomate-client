import React from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logout } from '../actions/user'
import { Link } from 'react-router-dom'

const LoggedInMenu = props => {
  return (
    <Menu.Menu
      position='right'>
      <Menu.Item
        name='My Plans'
        content='My Plans'
        onClick={() => console.log('My Plans')}>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to='diet-form'
        name='New Plan'
        content='New Plan'>
      </Menu.Item>
      <Menu.Item
        name='Learn'
        content='Learn'
        onClick={() => console.log('Learn')}>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to='/'
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