import React, { useState } from 'react'
import { Button, Container } from 'semantic-ui-react'

const MenuButtons = props => {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {

  }

  return (
    <Container fluid>
      <Button
        icon='save outline'
        content='Save Plan'
        color='green'
        active={!saved}
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