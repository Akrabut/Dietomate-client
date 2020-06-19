import { normalizeFoodProperties } from '../helpers/dietForm'

const setPlan = plan => {
  normalizeFoodProperties([plan])
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