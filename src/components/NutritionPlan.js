import React from 'react'
import Foods from './Foods'
import Nutrients from './Nutrients'
import { food1 as food, foodGenerator } from '../helpers/food'

const NutritionPlan = () => {
  const arr = new Array(30)
  for (let i = 0; i < 30; i++)
    arr[i] = foodGenerator(food, food['serving_size'])
  
  return (
    <div>
      <Foods arr={arr}/>
      <Nutrients arr={arr}/>
    </div>
  )
}

export default NutritionPlan