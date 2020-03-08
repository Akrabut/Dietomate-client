import React, { useState } from 'react'
import { Segment, Grid, Form, Input, Menu } from 'semantic-ui-react'

const DietForm = () => {
  const [activeTarget, setactiveTarget] = useState('')
  // hahaha he said sex
  const [activeSex, setactiveSex] = useState('')

  const leftFloat = { float: 'left', fontWeight: 'bold' }

  return (
    <Segment>
      <Grid columns={1} centered={true} padded={true}>

        <Form>
          <Grid.Row>
            <label style={leftFloat}>I want to</label>
            <br></br>
            <Menu compact={true}>
              <Menu.Item
                name="lose-weight"
                content="Lose weight"
                active={activeTarget === 'lose-weight'}
                onClick={(event, { name }) => setactiveTarget(name)}
              />
              <Menu.Item
                name="gain-muscle"
                content="Gain muscle"
                active={activeTarget === 'gain-muscle'}
                onClick={(event, { name }) => setactiveTarget(name)}
              />
              <Menu.Item
                name="maintain"
                content="Maintain"
                active={activeTarget === 'maintain'}
                onClick={(event, { name }) => setactiveTarget(name)}
              />
            </Menu>
          </Grid.Row>
          <Grid.Row>
            <Form.Field>
              <label style={leftFloat}>Age</label>
              <Input style={leftFloat} placeholder="##" />
            </Form.Field>
          </Grid.Row>
          <Grid.Row>
            <Form.Field>
              <label style={leftFloat}>Weight</label>
              <Input style={leftFloat} placeholder="Enter in kilograms" />
            </Form.Field>
          </Grid.Row>
          <Grid.Row>
            <Form.Field>
              <label style={leftFloat}>Height</label>
              <Input style={leftFloat} placeholder="Enter in centimeters" />
            </Form.Field>
          </Grid.Row>
          <Grid.Row>
            <label style={leftFloat}>I am</label>
            <Menu compact={true}>
              <Menu.Item
                name="male"
                content="Male"
                active={activeSex === 'male'}
                onClick={(event, { name }) => setactiveSex(name)}
              />
              <Menu.Item
                name="female"
                content="Female"
                active={activeSex === 'female'}
                onClick={(event, { name }) => setactiveSex(name)}
              />
            </Menu>
          </Grid.Row>
        </Form>
      </Grid>
    </Segment>
  )
}

export default DietForm