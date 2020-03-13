import React from 'react'
import { Container } from 'semantic-ui-react'
import HomeTitle from './HomeTitle'
import DietForm from './DietForm'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <main>
      <NavigationBar />
      <Container textAlign='center'>
        <HomeTitle />
        <DietForm />
      </Container>
    </main>
  )
}

export default Home