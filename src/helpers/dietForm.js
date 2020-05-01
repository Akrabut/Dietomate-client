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

export {
  calcBMR, calories
}