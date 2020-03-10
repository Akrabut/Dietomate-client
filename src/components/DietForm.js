import React, { useState, useEffect } from 'react'
import { Segment, Grid, Form, Menu, Button } from 'semantic-ui-react'
import { sendDietForm } from '../services/diet_form'

const DietForm = () => {
  const [formSent, setformSent] = useState(false)

  const [activeTarget, setactiveTarget] = useState('lose-weight')
  // hahaha he said sex
  const [activeSex, setactiveSex] = useState('male')

  const [activeAge, setactiveAge] = useState('')
  const [activeWeight, setactiveWeight] = useState('')
  const [activeHeight, setactiveHeight] = useState('')

  useEffect(() => {
    setformSent(false)
  }, [])

  const validateAge = (event) => {
    if (event.target.value && !RegExp('([1-9]([0-9]?))').test(event.target.value)) return
    setactiveAge(event.target.value)
  }

  const validateWeight = (event) => {
    if (event.target.value && !RegExp('([1-9]([0-9]?)([0-9]?))').test(event.target.value)) return
    setactiveWeight(event.target.value)
  }

  const validateHeight = (event) => {
    if (event.target.value && !RegExp('([1-2]([0-9]?)([0-9]?))').test(event.target.value)) return
    setactiveHeight(event.target.value)
  }

  const handleSubmit = async () => {
    await sendDietForm({
      diet: {
        target: activeTarget,
        sex: activeSex,
        age: activeAge,
        weight: activeWeight,
        height: activeHeight,
      }
    })
    setformSent(true)
  }

  if (formSent) return 'GENERATED MENU PLACEHOLDER'

  return (
    <Segment>
      <Form as={Grid} columns={2} centered={true} padded={true}>
        <Grid.Row>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <label>I want to</label>
          </Grid.Column>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <Menu compact stackable>
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
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <label>Age</label>
          </Grid.Column>
          <Form.Field required as={Grid.Column} >
            <input placeholder="##"
            type="text" minLength="2" maxLength="2"
            value={activeAge} onChange={validateAge} />
          </Form.Field>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <label>Weight</label>
          </Grid.Column>
          <Form.Field required as={Grid.Column}>
            <input placeholder="Enter in kilograms"
            type="text" minLength="2" maxLength="3"
            value={activeWeight} onChange={validateWeight}
             />
          </Form.Field>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <label>Height</label>
          </Grid.Column>
          <Form.Field required as={Grid.Column}>
            <input placeholder="Enter in centimeters"
            type="text" minLength="3" maxLength="3"
            value={activeHeight} onChange={validateHeight} />
          </Form.Field>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <label>I am</label>
          </Grid.Column>
          <Grid.Column textAlign={'center'}>
            <Menu compact stackable>
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
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Button type="submit" onClick={handleSubmit}>Get the plan!</Button>
        </Grid.Row>
      </Form>
    </Segment>
  )
}

export default DietForm