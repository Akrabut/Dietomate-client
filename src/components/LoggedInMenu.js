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
        as={Link}
        to={'my-plans'}
        name='My Plans'
        content='My Plans'
        onClick={() => console.log('My Plans')}
        style={props.itemColor}>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to='diet-form'
        name='New Plan'
        content='New Plan'
        style={props.itemColor}>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to='learn'
        name='Learn'
        content='Learn'
        onClick={() => console.log('Learn')}
        style={props.itemColor}>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to='/'
        name='Log Out'
        content='Log Out'
        onClick={() => props.logout()}
        style={props.itemColor}>
      </Menu.Item>
    </Menu.Menu>
  )
}

const mapDispatchToProps = {
  logout,
}

const connectedLoggedInMenu = connect(null, mapDispatchToProps)(LoggedInMenu)
export default connectedLoggedInMenu