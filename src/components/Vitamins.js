import React from 'react'
import { List, Header, Progress, Segment } from 'semantic-ui-react'

const Vitamins = ({ reqs, sum, amountColor }) => {
  const displayProperFixedValue = val => {
    const fixedVal = Number.parseFloat(val).toFixed(1)
    const roundedVal = Math.round(val)
    return parseFloat(fixedVal) === parseFloat(roundedVal) ? roundedVal : fixedVal
  }

  return (
    <Segment compact raised style={{ width: '20%', marginTop: 0, marginRight: '1em', marginLeft: '1em' }}>
      <Header>Vitamins</Header>
      <List>
        {Object.keys(sum['vitamins']).map(vitamin => {
          /* this piece of spaghetti takes an object with 'vitamin_x' keys and turns it into Vitamin X strings*/
          return (
            <List.Item key={vitamin}>
              {vitamin.split('_').map(word => word[0].toUpperCase().concat(word.slice(1, word.length))).join(' ')}
              <Progress
                percent={Math.round(sum['vitamins'][vitamin]['amount'] / reqs['vitamins'][vitamin]['amount'] * 100)}
                color={amountColor(reqs['vitamins'][vitamin]['amount'], sum['vitamins'][vitamin]['amount'])}
                progress>
                {`${displayProperFixedValue(sum['vitamins'][vitamin]['amount'])}/${displayProperFixedValue(reqs['vitamins'][vitamin]['amount'])} ${reqs['vitamins'][vitamin]['unit']}`}
              </Progress>
            </List.Item>
          )
        })}
      </List>
    </Segment>
  )
}

export default Vitamins