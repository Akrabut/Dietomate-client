import React from 'react'
import { calcRequirements, sumNutrients } from '../helpers/nutritionPlan'
import Macronutrients from './Macronutrients'
import Vitamins from './Vitamins'
import Minerals from './Minerals'

const Nutrients = ({ planObject, constraints }) => {
  const properties = constraints.requirements
  const reqs = calcRequirements(properties.weight, properties.height, properties.age, properties.sex, properties.target)
  const sum = sumNutrients(planObject)

  return (
    <div style={{display: 'flex'}}>
      <Macronutrients reqs={reqs} sum={sum} />
      <Vitamins reqs={reqs} sum={sum} />
      <Minerals reqs={reqs} sum={sum} />
    </div>
  )
}

export default Nutrients