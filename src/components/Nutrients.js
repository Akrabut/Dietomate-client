import React from 'react'
import { calcRequirements, sumNutrients } from '../helpers/nutritionPlan'
import Macronutrients from './Macronutrients'
import Vitamins from './Vitamins'

const Nutrients = ({arr}) => {
  const reqs = calcRequirements(88, 181, 28, 'male', 'gain-muscle')
  const sum = sumNutrients(arr)

  return (
    <div>
      <Macronutrients reqs={reqs} sum={sum} />
      <Vitamins reqs={reqs} sum={sum} />
    </div>
  )
}

export default Nutrients