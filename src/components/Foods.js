import React from 'react'
import { Table, Header, Segment } from 'semantic-ui-react'

const Foods = ({ planObject }) => {
  return (
    <Segment floated='left' compact raised color='green'>
      <Header color='green'>Foods</Header>
      <Table color='green'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Food</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Calories</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {planObject['foods'].map((food, i) => {
            return (
              <Table.Row key={`row ${i}`}>
                <Table.Cell textAlign='center' key={`food name ${i}`}>{food.name}</Table.Cell>
                <Table.Cell textAlign='center' key={`food amount ${i}`}>{`${food['quantity']}g (${Math.round(food['quantity'] / food['serving_size'])} servings)`}</Table.Cell>
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