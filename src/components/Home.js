import React from 'react'
import { Container } from 'semantic-ui-react'
import HomeTitle from './HomeTitle'
import DietForm from './DietForm'

const Home = () => {
  return (
    <Container textAlign='center'>
      <HomeTitle/>
      <DietForm/>
    </Container>
  )
}

export default Home