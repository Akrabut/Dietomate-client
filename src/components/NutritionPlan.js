import React from 'react'
import { Segment } from 'semantic-ui-react'
import Foods from './Foods'
import Nutrients from './Nutrients'
import food from '../helpers/food'

const NutritionPlan = () => {
  const arr = new Array(30)

  for (let i = 0; i < 30; i++)
    arr[i] = food
  
  return (
    <div>
    <Segment floated='left' compact>
      <Foods arr={arr}/>
    </Segment>
    <Segment compact>
      <Nutrients arr={arr}/>
    </Segment>
    </div>
  )
}

export default NutritionPlan