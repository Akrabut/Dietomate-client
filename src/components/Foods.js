import React from 'react'
import { Table, Header, Segment } from 'semantic-ui-react'

const Foods = ({ arr }) => {
  return (
    <Segment floated='left' compact raised>
      <Header>Foods</Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Food</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Calories</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {arr.map((food, i) => {
            return (
              <Table.Row key={`row ${i}`}>
                <Table.Cell textAlign='center' key={`food name ${i}`}>{food.name}</Table.Cell>
                <Table.Cell textAlign='center' key={`food amount ${i}`}>{`${food['amount']}g`}</Table.Cell>
                <Table.Cell textAlign='center' key={`calorie amount ${i}`}>{Math.round(food['calories'])}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default Foods