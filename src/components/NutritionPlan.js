import React, { useState } from 'react'
import Foods from './Foods'
import Nutrients from './Nutrients'
import { connect } from 'react-redux'

const NutritionPlan = props => {
  const [currentPlan, setCurrentPlan] = useState(0)

  console.log(props.planResponse);
  return (
    <div style={{ marginTop: '4vw', marginBottom: '1vw' }}>
      <Foods planObject={props.planResponse.plans[currentPlan]}/>
      <Nutrients planObject={props.planResponse.plans[currentPlan]} constraints={props.planResponse.reqs} />
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