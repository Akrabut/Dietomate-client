import React, { useState } from 'react'
import Foods from './Foods'
import Nutrients from './Nutrients'
import { connect } from 'react-redux'

const NutritionPlan = props => {
  const [currentPlan, setCurrentPlan] = useState(0)

  const setNextPlan = () => {
    setCurrentPlan((currentPlan + 1) % props.planResponse.plans.length)
    console.log(currentPlan);
  }

  console.log(props.planResponse);
  return (
    <div style={{ marginTop: '4vw', marginBottom: '1vw' }}>
      <Foods planObject={props.planResponse.plans[currentPlan]} setNextPlan={setNextPlan} currentPlanId={props.planResponse.plans[currentPlan]._id} />
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