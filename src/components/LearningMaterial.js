import React from 'react'
import { Card, Segment, Image } from 'semantic-ui-react'

const LearningMaterial = props => {
  return (
    <Segment compact raised color='green'>
      <Segment.Group horizontal>
        <Card fluid raised
          color='green'
          style={{ margin: 0 }}
          href={'https://www.active.com/fitness/articles/weight-loss-101-how-to-calculate-a-calorie-deficit'}>
          <Image src='https://source.unsplash.com/random/400x400/?calories' wrapped ui={false} />
          <Card.Header>Caloric Intake and Deficit</Card.Header>
          <Card.Description>It all comes down to this!</Card.Description>
        </Card>
        <Card fluid raised
          color='green'
          style={{ margin: '0 5% 0 5%' }}
          href={'https://www.nal.usda.gov/fnic/macronutrients'}>
          <Image src='https://source.unsplash.com/random/400x400/?healthy-food1' wrapped ui={false} />
          <Card.Header>Macronutrient requirements</Card.Header>
          <Card.Description>The basics of nutrition planning</Card.Description>
        </Card>
        <Card fluid raised
          color='green'
          style={{ margin: '0 5% 0 0' }}
          href={'https://www.who.int/nutrition/publications/micronutrients/9241546123/en/'}>
          <Image src='https://source.unsplash.com/random/400x400/?healthy-food2' wrapped ui={false} />
          <Card.Header>Micronutrient requirements</Card.Header>
          <Card.Description>This is where it gets complicated</Card.Description>
        </Card>
        <Card fluid raised
          color='green'
          style={{ margin: 0 }}
          href={'https://www.healthline.com/health/exercise-and-weight-loss'}>
          <Image src='https://source.unsplash.com/random/400x400/?sport' wrapped ui={false} />
          <Card.Header>Sports and Body Weight</Card.Header>
          <Card.Description>Not as obvious as you might think!</Card.Description>
        </Card>
      </Segment.Group>
    </Segment>
  )
}

export default LearningMaterial