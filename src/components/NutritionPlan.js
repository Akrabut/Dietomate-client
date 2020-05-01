import React from 'react'
import Foods from './Foods'
import Nutrients from './Nutrients'
import { connect } from 'react-redux'

const NutritionPlan = props => {
  console.log(props.planResponse);
  return (
    <div style={{ marginTop: '4vw', marginBottom: '1vw' }}>
      <Foods planObject={props.planResponse.plans[0]}/>
      <Nutrients planObject={props.planResponse}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    planResponse: state.planResponse,
  }
}

const connectedNutritionPlan = connect(mapStateToProps)(NutritionPlan)
export default connectedNutritionPlan