const calcBMR = (weight, height, age, sex) => {
  // multiply by 1.2 as we assume sedantery lifestyle
  let baseBMR = 10 * weight + 6.25 * height - 5 * age * 1.2
  return sex === 'male' ? baseBMR + 5 : baseBMR - 161
}

const calories = (bmr, target) => {
  if (target === 'lose-weight') return bmr - 400
  if (target === 'gain-muscle') return bmr + 400
  return bmr
}

const normalizeFoodProperties = res => {
  return res.map(plan => {
    plan.foods.map((food, i) => {
      food['quantity'] = plan['quantities'][i]
      food['calories'] = food['calories'] * food['quantity'] / 100
      Object.keys(food['macronutrients']).forEach(key => food['macronutrients']['key'] *= food['quantity'] / 100)
      Object.keys(food['vitamins']).forEach(key => food['vitamins'][key]['amount'] *= food['quantity'] / 100)
      Object.keys(food['minerals']).forEach(key => food['minerals'][key]['amount'] *= food['quantity'] / 100)
      return food
    })
    delete plan['quantities']
    return plan
  })
}

export {
  calcBMR, calories, normalizeFoodProperties
}