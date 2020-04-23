import React from 'react'
import { List, Header, Progress } from 'semantic-ui-react'

const Vitamins = ({ reqs, sum }) => {
  console.log(reqs);
  console.log(sum);
  console.log(Object.keys(sum.vitamins));
  return (
    <div>
      <Header>Vitamins</Header>
      <List>
      {Object.keys(sum.vitamins).map((vitamin, i) => {
        return (
          <List.Item>{sum['vitamins'][vitamin].split('_').map(word => word[0].toUpperCase())}</List.Item>
        )
      })}
      </List>
    </div>
    )
}

export default Vitamins