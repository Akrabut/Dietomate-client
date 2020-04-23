// amount defined by RDA
export const vitamins = {
  vitamins: {
    vitamin_a: {
      amount: 3000,
      max: null,
      unit: 'IU'
    },
    vitamin_b1: {
      amount: 1.2,
      max: null,
      unit: 'mg'
    },
    vitamin_b2: {
      amount: 1.3,
      max: null,
      unit: 'mg'
    },
    vitamin_b3: {
      amount: 16,
      max: 35,
      unit: 'mg'
    },
    vitamin_b5: {
      amount: 5,
      max: null,
      unit: 'mg'
    },
    vitamin_b6: {
      amount: 1.3,
      max: 100,
      unit: 'mg'
    },
    vitamin_b7: {
      amount: 30,
      max: null,
      unit: 'mcg'
    },
    vitamin_b9: {
      amount: 400,
      max: 1000,
      unit: 'mcg'
    },
    vitamin_b12: {
      amount: 2.4,
      max: null,
      unit: 'mcg'
    },
    vitamin_c: {
      amount: 75,
      max: 2000,
      unit: 'mg'
    },
    vitamin_d: {
      amount: 600,
      max: 4000,
      unit: 'IU'
    },
    vitamin_e: {
      amount: 0.2,
      max: 1000,
      unit: 'mg'
    },
    vitamin_k: {
      amount: 2.2,
      max: 2000,
      unit: 'mcg'
    },
  },
  minerals: {
    calcium: {
      amount: 1000,
      max: 2500,
      unit: 'mg'
    },
    iron: {
      amount: 8,
      max: 45,
      unit: 'mg'
    },
    magnesium: {
      amount: 400,
      max: null,
      unit: 'mg'
    },
    phosphorus: {
      amount: 700,
      max: 4000,
      unit: 'mg'
    },
    potassium: {
      amount: 4700,
      max: null,
      unit: 'mg'
    },
    sodium: {
      amount: 1500,
      max: 2300,
      unit: 'mg'
    },
    zinc: {
      amount: 1,
      max: 40,
      unit: 'mg'
    },
    copper: {
      amount: 0.9,
      max: 10,
      unit: 'mg'
    },
    manganese: {
      amount: 2.3,
      max: 11,
      unit: 'mg'
    },
    selenium: {
      amount: 55,
      max: 400,
      unit: 'mcg'
    },
    fluoride: {
      amount: 3.5,
      unit: 'mcg'
    },
    iodine: {
      amount: 150,
      max: null,
      unit: 'mcg'
    },
    chromium: {
      amount: 120,
      max: 200,
      unit: 'mcg'
    }
  }
}

const calcBMR = (weight, height, age, sex) => {
  // multiply by 1.2 as we assume sedantery lifestyle
  let baseBMR = 10 * weight + 6.25 * height - 5 * age * 1.2
  return sex === 'male' ? baseBMR + 5 : baseBMR - 161
}

const macronutrients = (bmr, weight, sex) => {
  const neededFat = bmr * 0.3 / 9
  const neededFiber = sex === 'male' ? 38 : 25
  return {
    protein: weight,
    fat: neededFat,
    fiber: neededFiber
  }
}

const calories = (bmr, target) => {
  if (target === 'lose-weight') return bmr - 400
  if (target === 'gain-muscle') return bmr + 500
  return bmr
}

export const calcRequirements = (weight, height, age, sex, target) => {
  const bmr = calcBMR(weight, height, age, sex)
  return {
    calories: calories(bmr, target),
    vitamins: vitamins,
    macronutrients: macronutrients(bmr, weight, sex),
  }
}

const generateSumObject = () => {
  return {
    calories: 0,
    macronutrients: {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      fiber: 0,
    },
    vitamins: {
      vitamin_a: {
        amount: 0,
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
        amount: 0,
        unit: 'mg'
      },
      vitamin_b5: {
        amount: 0,
        unit: 'mg'
      },
      vitamin_b6: {
        amount: 0,
        unit: 'mg'
      },
      vitamin_b7: {
        amount: 0,
        unit: 'mg'
      },
      vitamin_b9: {
        amount: 0,
        unit: 'mcg'
      },
      vitamin_b12: {
        amount: 0,
        unit: 'mcg'
      },
      vitamin_c: {
        amount: 0,
        unit: 'mg'
      },
      vitamin_d: {
        amount: 0,
        unit: 'IU'
      },
      vitamin_e: {
        amount: 0,
        unit: 'mg'
      },
      vitamin_k: {
        amount: 0,
        unit: 'mcg'
      },
    },
    minerals: {
      calcium: {
        amount: 0,
        unit: 'mg'
      },
      iron: {
        amount: 0,
        unit: 'mg'
      },
      magnesium: {
        amount: 0,
        unit: 'mg'
      },
      phosphorus: {
        amount: 0,
        unit: 'mg'
      },
      potassium: {
        amount: 0,
        unit: 'mg'
      },
      sodium: {
        amount: 0,
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
        amount: 0,
        unit: 'mcg'
      }
    }
  }
}

export const sumNutrients = foodArray => (
  foodArray.reduce((sum, food) => {
    sum['calories'] += food['calories_per_100g'] * (food['selected_amount'] / 100)
    sum['macronutrients']['protein'] += food['macronutrients_per_100g']['protein'] * (food['selected_amount'] / 100)
    sum['macronutrients']['carbohydrate'] += food['macronutrients_per_100g']['carbohydrate'] * (food['selected_amount'] / 100)
    sum['macronutrients']['fat'] += food['macronutrients_per_100g']['fat'] * (food['selected_amount'] / 100)
    sum['macronutrients']['fiber'] += food['macronutrients_per_100g']['fiber'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_a']['amount'] += food['vitamin_per_100g']['vitamin_a']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b1']['amount'] += food['vitamin_per_100g']['vitamin_b1']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b2']['amount'] += food['vitamin_per_100g']['vitamin_b2']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b3']['amount'] += food['vitamin_per_100g']['vitamin_b3']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b5']['amount'] += food['vitamin_per_100g']['vitamin_b5']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b6']['amount'] += food['vitamin_per_100g']['vitamin_b6']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b7']['amount'] += food['vitamin_per_100g']['vitamin_b7']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b9']['amount'] += food['vitamin_per_100g']['vitamin_b9']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_b12']['amount'] += food['vitamin_per_100g']['vitamin_b12']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_a']['amount'] += food['vitamin_per_100g']['vitamin_a']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_c']['amount'] += food['vitamin_per_100g']['vitamin_c']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_d']['amount'] += food['vitamin_per_100g']['vitamin_d']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_e']['amount'] += food['vitamin_per_100g']['vitamin_e']['amount'] * (food['selected_amount'] / 100)
    sum['vitamins']['vitamin_k']['amount'] += food['vitamin_per_100g']['vitamin_k']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['calcium']['amount'] += food['minerals_per_100g']['calcium']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['iron']['amount'] += food['minerals_per_100g']['iron']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['magnesium']['amount'] += food['minerals_per_100g']['magnesium']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['phosphorus']['amount'] += food['minerals_per_100g']['phosphorus']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['potassium']['amount'] += food['minerals_per_100g']['potassium']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['sodium']['amount'] += food['minerals_per_100g']['sodium']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['zinc']['amount'] += food['minerals_per_100g']['zinc']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['copper']['amount'] += food['minerals_per_100g']['copper']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['manganese']['amount'] += food['minerals_per_100g']['manganese']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['selenium']['amount'] += food['minerals_per_100g']['selenium']['amount'] * (food['selected_amount'] / 100)
    sum['minerals']['fluoride']['amount'] += food['minerals_per_100g']['fluoride']['amount'] * (food['selected_amount'] / 100)
    return sum
  }, generateSumObject())
)