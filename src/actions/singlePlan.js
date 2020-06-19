const setPlan = plan => {
  return {
    type: 'SET',
    data: plan,
  }
}

const unsetPlan = () => {
  return {
    type: 'UNSET',
  }
}

export {
  setPlan,
  unsetPlan,
}