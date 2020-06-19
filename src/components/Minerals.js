import React from 'react'
import { List, Header, Progress, Segment } from 'semantic-ui-react'

const Minerals = ({ reqs, sum, amountColor }) => {
  const displayProperFixedValue = val => {
    const fixedVal = Number.parseFloat(val).toFixed(1)
    const roundedVal = Math.round(val)
    return parseFloat(fixedVal) === parseFloat(roundedVal) ? roundedVal : fixedVal
  }

  return (
    <Segment compact raised style={{ width: '20%', marginTop: 0 }} color='green'>
      <Header color='green'>Minerals</Header>
      <List>
        {Object.keys(sum['minerals']).map(mineral => {
          /* this piece of sphaggeti takes an object with 'vitamin_x' keys and turns it into Vitamin X strings*/
          return (
            <List.Item key={mineral}>
              {mineral[0].toUpperCase().concat(mineral.slice(1, mineral.length))}
              <Progress percent={Math.round(sum['minerals'][mineral]['amount'] / reqs['minerals'][mineral]['amount'] * 100)}
                color={amountColor(reqs['minerals'][mineral]['amount'], sum['minerals'][mineral]['amount'])}
                progress>
                {`${displayProperFixedValue(sum['minerals'][mineral]['amount'])}/${displayProperFixedValue(reqs['minerals'][mineral]['amount'])} ${reqs['minerals'][mineral]['unit']}`}
              </Progress>
            </List.Item>
          )
        })}
      </List>
    </Segment>
  )
}

export default Minerals