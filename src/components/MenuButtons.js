import React, { useState } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { savePlan } from '../services/save-plan'

const MenuButtons = props => {
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    await savePlan(props.currentPlanId, localStorage.getItem('loggedDietomateUserId'))
    setSaved(true)
  }

  return (
    <Container fluid>
      <Button
        icon='save outline'
        content='Save Plan'
        color='green'
        disabled={saved}
        onClick={handleSave}
      />
      <Button
        icon='redo'
        content='Next Plan'
        onClick={() => props.setNextPlan()}
      />
    </Container>
  )
}

export default MenuButtons