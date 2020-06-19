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
          <Image src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi0.wp.com%2Fimages-prod.healthline.com%2Fhlcmsresource%2Fimages%2FAN_images%2Fhealth-benefits-of-apples-1296x728-feature.jpg%3Fw%3D1155%26h%3D1528&sp=1592597534T187266fb36edd240fba394ab5c7b7e8d135e252030f94f533f0096399b3e007d' wrapped ui={false} />
          <Card.Header>Caloric Intake and Deficit</Card.Header>
          <Card.Description>It all comes down to this!</Card.Description>
        </Card>
        <Card fluid raised
          color='green'
          style={{ margin: '0 5% 0 5%' }}
          href={'https://www.nal.usda.gov/fnic/macronutrients'}>
          <Image src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.news-medical.net%2Fimage.axd%3Fpicture%3D2018%252F2%252Fbanana.jpg&sp=1592598175T97946cbf43ae7bfc5588e119f341fc83f3afe0ee7aabdb603eb8b4ba008d1e0b' wrapped ui={false} />
          <Card.Header>Macronutrient requirements</Card.Header>
          <Card.Description>The basics of nutrition planning</Card.Description>
        </Card>
        <Card fluid raised
          color='green'
          style={{ margin: '0 5% 0 0' }}
          href={'https://www.who.int/nutrition/publications/micronutrients/9241546123/en/'}>
          <Image src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi0.wp.com%2Fimages-prod.healthline.com%2Fhlcmsresource%2Fimages%2FAN_images%2Fbenefits-of-pears-1296x728-feature.jpg%3Fw%3D1155%26h%3D1528&sp=1592598277T69632031f2906bde75add2f50cef258e2eb1369488b1b1cd11cfbb28f67818d0' wrapped ui={false} />
          <Card.Header>Micronutrient requirements</Card.Header>
          <Card.Description>This is where it gets complicated</Card.Description>
        </Card>
        <Card fluid raised
          color='green'
          style={{ margin: 0 }}
          href={'https://www.healthline.com/health/exercise-and-weight-loss'}>
          <Image src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.thespeedproject.com%2Fwp-content%2Fuploads%2F2019%2F06%2FProper-Sprinting-Technique-featured-image.jpg&sp=1592598522T3c4bc05eeed039c8938f67f8f597a75f3e7296314da27759c66c9176cb5c14a2' wrapped ui={false} />
          <Card.Header>Sports and Body Weight</Card.Header>
          <Card.Description>Not as obvious as you might think!</Card.Description>
        </Card>
      </Segment.Group>
    </Segment>
  )
}

export default LearningMaterial