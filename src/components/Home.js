import React from 'react'
import { Container } from 'semantic-ui-react'
import HomeTitle from './HomeTitle'
import DietForm from './DietForm'
import NutritionPlan from './NutritionPlan'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <main>
      <NavigationBar />
      <Container textAlign='center'>
        <HomeTitle />
        {/* <DietForm /> */}
        <NutritionPlan />
      </Container>
    </main>
  )
}

export default Home