import React from 'react'
import { Container } from 'semantic-ui-react'
import HomeTitle from './HomeTitle'
import DietForm from './DietForm'
import NutritionPlan from './NutritionPlan'
import NavigationBar from './NavigationBar'
import { connect } from 'react-redux'

const Home = props => {
  const displayCorrectComp = () => (
    props.planResponse.reqs
      ? (
        <Container textAlign='center'>
          <NutritionPlan />
        </Container>
      )
      : (
        <Container textAlign='center'>
          <HomeTitle />
          <DietForm />
        </Container>
      )
  )
  console.log(props.planResponse.reqs);
  return (
    <main>
      <NavigationBar />
      {displayCorrectComp()}
    </main>
  )
}


const mapStateToProps = state => {
  return {
    planResponse: state.planResponse,
  }
}

const connectedHome = connect(mapStateToProps)(Home)

export default connectedHome