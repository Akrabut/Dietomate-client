import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import LoggedOutMenu from './LoggedOutMenu'
import LoggedInMenu from './LoggedInMenu'
import { connect } from 'react-redux'

const NavigationBar = props => {
  const displayCorrectMenu = () => {
    return props.user.name
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

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const connectedNavigationBar = connect(mapStateToProps)(NavigationBar)
export default connectedNavigationBar
