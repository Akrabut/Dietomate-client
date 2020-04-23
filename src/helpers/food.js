// ALL SPECIFIED VALUES ARE PER 100 GRAMS OF FOOD
const food1 = {
  name: 'Apple',
  calories: 52,
  serving_size: 182,
  macronutrients: {
    carbohydrate: 11.4,
    protein: 0.3,
    fat: 0.2,
    fiber: 2.4
  },
  vitamins: {
    vitamin_a: {
      amount: 54,
      unit: 'IU'
    },
    vitamin_b1: {
      amount: 0,
      unit: 'mg'
    },
    vitamin_b2: {
      amount: 0,
      unit: 'mg'
    },
    vitamin_b3: {
      amount: 0.1,
      unit: 'mg'
    },
    vitamin_b5: {
      amount: 0.1,
      unit: 'mg'
    },
    vitamin_b6: {
      amount: 0.0,
      unit: 'mg'
    },
    vitamin_b7: {
      amount: 0,
      unit: 'mg'
    },
    vitamin_b9: {
      amount: 3,
      unit: 'mcg'
    },
    vitamin_b12: {
      amount: 0,
      unit: 'mcg'
    },
    vitamin_c: {
      amount: 4.6,
      unit: 'mg'
    },
    vitamin_d: {
      amount: 0,
      unit: 'IU'
    },
    vitamin_e: {
      amount: 0.2,
      unit: 'mg'
    },
    vitamin_k: {
      amount: 2.2,
      unit: 'mcg'
    },
  },
  minerals: {
    calcium: {
      amount: 6,
      unit: 'mg'
    },
    iron: {
      amount: 0.1,
      unit: 'mg'
    },
    magnesium: {
      amount: 5,
      unit: 'mg'
    },
    phosphorus: {
      amount: 11,
      unit: 'mg'
    },
    potassium: {
      amount: 107,
      unit: 'mg'
    },
    sodium: {
      amount: 1,
      unit: 'mg'
    },
    zinc: {
      amount: 0,
      unit: 'mg'
    },
    copper: {
      amount: 0,
      unit: 'mg'
    },
    manganese: {
      amount: 0,
      unit: 'mg'
    },
    selenium: {
      amount: 0,
      unit: 'mcg'
    },
    fluoride: {
      amount: 3.3,
      unit: 'mcg'
    }
  },
  category: 'fruit'
}

const deepCopy = (inObject) => {
  let outObject, value, key
  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }
  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}
  for (key in inObject) {
    value = inObject[key]
    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopy(value)
  }
  return outObject
}

const foodGenerator = (food, amount) => {
  const foodCopy = deepCopy(food)
  foodCopy['calories'] = foodCopy['calories'] * amount / 100
  Object.keys(food['macronutrients']).forEach(macro => foodCopy['macronutrients'][macro] *= amount / 100)
  Object.keys(food['vitamins']).forEach(vitamin => foodCopy['vitamins'][vitamin]['amount'] *= amount / 100)
  Object.keys(food['minerals']).forEach(vitamin => foodCopy['minerals'][vitamin]['amount'] *= amount / 100)
  foodCopy['amount'] = amount
  return foodCopy
}

export { food1, foodGenerator }