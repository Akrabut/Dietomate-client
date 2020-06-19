import React from 'react'
import Foods from './Foods'
import Nutrients from './Nutrients'
import { connect } from 'react-redux'

const SingleNutritionPlan = props => {
  return (
    <div style={{ marginTop: '4vw', marginBottom: '1vw' }}>
      <Foods planObject={props.singlePlan} buttons={false} />
      <Nutrients planObject={props.singlePlan} />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    singlePlan: state.singlePlan,
  }
}

const connectedSingleNutritionPlan = connect(mapStateToProps)(SingleNutritionPlan)
export default connectedSingleNutritionPlan