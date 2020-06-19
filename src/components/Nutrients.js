import React from 'react'
import { calcRequirements, sumNutrients } from '../helpers/nutritionPlan'
import Macronutrients from './Macronutrients'
import Vitamins from './Vitamins'
import Minerals from './Minerals'

const amountColor = (req, amt) => {
  if (amt >= req) {
    return 'green'
  } else if (amt < req * 0.5) {
    return 'red'
  } else 
    return 'yellow'
}

const Nutrients = ({ planObject, constraints }) => {
  const properties = constraints.requirements
  const reqs = calcRequirements(properties.weight, properties.height, properties.age, properties.sex, properties.target)
  const sum = sumNutrients(planObject)

  return (
    <div style={{display: 'flex'}}>
      <Macronutrients reqs={reqs} sum={sum} amountColor={amountColor} />
      <Vitamins reqs={reqs} sum={sum} amountColor={amountColor} />
      <Minerals reqs={reqs} sum={sum} amountColor={amountColor} />
    </div>
  )
}



export default Nutrients