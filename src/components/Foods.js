import React from 'react'
import { Table, Header } from 'semantic-ui-react'

const Foods = ({ arr }) => {
  return (
    <div>
      <Header>Foods</Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Food</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Calroies</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {arr.map((food, i) => {
            return (
              <Table.Row key={`row ${i}`}>
                <Table.Cell key={`food name ${i}`}>{food.name}</Table.Cell>
                <Table.Cell key={`food amount ${i}`}>{food['selected_amount']}</Table.Cell>
                <Table.Cell key={`calorie amount ${i}`}>{food['calories_per_100g'] * (food['selected_amount'] / 100)}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Foods