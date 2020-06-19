import React, { useState, useEffect } from 'react'
import { getPlans } from '../services/get-plans'
import { Card, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPlan } from '../actions/singlePlan' 

const SavedPlans = props => {
  const [plans, setPlans] = useState([])
  
  useEffect(() => {
    (async () => {
      const res = await getPlans(localStorage.getItem('loggedDietomateUserId'))
      setPlans(res.data)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (plans.length < 1) {
    return (
      <h2 style={{ color: 'rgb(33, 186, 69)'}}>Save plans to see them here!</h2>
    )
  }

  const handleClick = i => {
    props.setPlan(plans[i])
  }

  return (
    <Container textAlign='center'>
      <Header color='green'>My Saved Plans</Header>
      <Card.Group centered>
        {plans.map((plan, i) => (
          <Card raised
            color='green'
            key={`plan-${i}`}
            onClick={() => handleClick(i)}
            as={Link}
            to={'single-nutrition-plan'}>
            <Card.Header>{`Plan ${i + 1} - ${plan.calories} Calories`}</Card.Header>
          </Card>
        ))}
      </Card.Group>
    </Container>
  )
}

const mapDispatchToProps = {
  setPlan,
}

const connectedSavedPlans = connect(null, mapDispatchToProps)(SavedPlans)
export default connectedSavedPlans