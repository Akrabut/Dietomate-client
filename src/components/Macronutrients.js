import React from 'react'
import { List, Header, Progress } from 'semantic-ui-react'

const Macronutrients = ({reqs, sum}) => {
  return (
  <div>
    <Header>Macronutrients</Header>
    <List>
      <List.Item>
          Calories
        <Progress percent={Math.round(sum.calories / reqs.calories * 100)} progress>
        {`${Math.round(sum.calories)}/${Math.round(reqs.calories)}`}
        </Progress>
      </List.Item>
        <List.Item>
          Protein
          <Progress percent={Math.round(sum.macronutrients.protein / reqs.macronutrients.protein * 100)} progress>
            {`${Math.round(sum.macronutrients.protein)}/${Math.round(reqs.macronutrients.protein)}`}
          </Progress>
        </List.Item>
        <List.Item>
          Fat
          <Progress percent={Math.round(sum.macronutrients.fat / reqs.macronutrients.fat * 100)} progress>
            {`${Math.round(sum.macronutrients.fat)}/${Math.round(reqs.macronutrients.fat)}`}
          </Progress>
        </List.Item>
        <List.Item>
          Carbohydrates
          <Progress percent={100} disabled >no target</Progress>
        </List.Item>
        <List.Item>
          Fiber
          <Progress percent={Math.round(sum.macronutrients.fiber / reqs.macronutrients.fiber * 100)} progress>
            {`${Math.round(sum.macronutrients.fiber)}/${Math.round(reqs.macronutrients.fiber)}`}
          </Progress>
        </List.Item>
    </List>
  </div>
  )
}

export default Macronutrients