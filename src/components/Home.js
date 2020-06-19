import React from 'react'
import { Container } from 'semantic-ui-react'
import HomeTitle from './HomeTitle'
import DietForm from './DietForm'
import NutritionPlan from './NutritionPlan'
import NavigationBar from './NavigationBar'
import LearningMaterial from './LearningMaterial'
import SavedPlans from './SavedPlans'
import SingleNutritionPlan from './SingleNutritionPlan'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = props => {
  return (
    <Router>
      <NavigationBar />
      <Container textAlign='center' style={{ marginTop: '5vw' }}>
        <Switch>
          <Route exact path='/'><HomeTitle /></Route>
          <Route exact path='/diet-form'><DietForm /></Route>
          <Route exact path='/nutrition-plans'><NutritionPlan /></Route>
          <Route exact path='/my-plans'><SavedPlans /></Route>
          <Route exact path='/learn'><LearningMaterial /></Route>
          <Route exact path='/single-nutrition-plan'><SingleNutritionPlan /></Route>
        </Switch>
      </Container>
    </Router>
  )
}


const mapStateToProps = state => {
  return {
    planResponse: state.planResponse,
  }
}

const connectedHome = connect(mapStateToProps)(Home)

export default connectedHome