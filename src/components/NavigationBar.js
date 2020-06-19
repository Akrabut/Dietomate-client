import React, { useEffect } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import LoggedOutMenu from './LoggedOutMenu'
import LoggedInMenu from './LoggedInMenu'
import { login } from '../actions/user'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const NavigationBar = props => {

  useEffect(() => {
    // this might seem redundant right now, but will be of use after farther development
    localStorage.getItem('loggedDietomateUsername')
      && props.login({
        _id: localStorage.getItem('loggedDietomateUserId'),
        name: localStorage.getItem('loggedDietomateUsername'),
        email: localStorage.getItem('loggedDietomateUserEmail'),
        token: localStorage.getItem('loggedDietomateUserToken'),
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const displayCorrectMenu = () => {
    return localStorage.getItem('loggedDietomateUsername')
      ? <LoggedInMenu itemColor={itemColor} />
      : <LoggedOutMenu itemColor={itemColor} />
  }

  const itemColor = {
    color: '#21ba45',
  }

  return (
    <Sidebar
      as={Menu}
      size='huge'
      animation='overlay'
      stackable
      visible
      direction='top'>
      <Menu.Item header as={Link} to='/'>
        <Icon name='lemon outline'
          color='green' />
        <p style={itemColor}>Dietomate - Automate Your Diet!</p>
      </Menu.Item>
      {displayCorrectMenu()}
    </Sidebar>
  )
}

const mapDispatchToProps = {
  login,
}

// connecting the navigation bar allows components farther down the tree to rerender the bar
// once a user has logged in or registered
const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const connectedNavigationBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
export default connectedNavigationBar
