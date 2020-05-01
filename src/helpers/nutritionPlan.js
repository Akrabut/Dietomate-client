import { calcBMR, calories } from './dietForm'

// amount defined by RDA
const vitamins = {
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
    amount: 90,
    max: 2000,
    unit: 'mg'
  },
  vitamin_d: {
    amount: 600,
    max: 4000,
    unit: 'IU'
  },
  vitamin_e: {
    amount: 15,
    max: 1000,
    unit: 'mg'
  },
  vitamin_k: {
    amount: 120,
    max: 2000,
    unit: 'mcg'
  },
}
const minerals = {
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

const macronutrients = (bmr, weight, sex) => {
  const neededFat = bmr * 0.3 / 9
  const neededFiber = sex === 'male' ? 38 : 25
  return {
    protein: weight,
    fat: neededFat,
    fiber: neededFiber
  }
}

export const calcRequirements = (weight, height, age, sex, target) => {
  const bmr = calcBMR(weight, height, age, sex)
  return {
    calories: calories(bmr, target),
    vitamins: vitamins,
    minerals: minerals,
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
    sum['calories'] += food['calories']
    sum['macronutrients']['protein'] += food['macronutrients']['protein']
    sum['macronutrients']['carbohydrate'] += food['macronutrients']['carbohydrate']
    sum['macronutrients']['fat'] += food['macronutrients']['fat']
    sum['macronutrients']['fiber'] += food['macronutrients']['fiber']
    sum['vitamins']['vitamin_a']['amount'] += food['vitamins']['vitamin_a']['amount']
    sum['vitamins']['vitamin_b1']['amount'] += food['vitamins']['vitamin_b1']['amount']
    sum['vitamins']['vitamin_b2']['amount'] += food['vitamins']['vitamin_b2']['amount']
    sum['vitamins']['vitamin_b3']['amount'] += food['vitamins']['vitamin_b3']['amount']
    sum['vitamins']['vitamin_b5']['amount'] += food['vitamins']['vitamin_b5']['amount']
    sum['vitamins']['vitamin_b6']['amount'] += food['vitamins']['vitamin_b6']['amount']
    sum['vitamins']['vitamin_b7']['amount'] += food['vitamins']['vitamin_b7']['amount']
    sum['vitamins']['vitamin_b9']['amount'] += food['vitamins']['vitamin_b9']['amount']
    sum['vitamins']['vitamin_b12']['amount'] += food['vitamins']['vitamin_b12']['amount']
    sum['vitamins']['vitamin_a']['amount'] += food['vitamins']['vitamin_a']['amount']
    sum['vitamins']['vitamin_c']['amount'] += food['vitamins']['vitamin_c']['amount']
    sum['vitamins']['vitamin_d']['amount'] += food['vitamins']['vitamin_d']['amount']
    sum['vitamins']['vitamin_e']['amount'] += food['vitamins']['vitamin_e']['amount']
    sum['vitamins']['vitamin_k']['amount'] += food['vitamins']['vitamin_k']['amount']
    sum['minerals']['calcium']['amount'] += food['minerals']['calcium']['amount']
    sum['minerals']['iron']['amount'] += food['minerals']['iron']['amount']
    sum['minerals']['magnesium']['amount'] += food['minerals']['magnesium']['amount']
    sum['minerals']['phosphorus']['amount'] += food['minerals']['phosphorus']['amount']
    sum['minerals']['potassium']['amount'] += food['minerals']['potassium']['amount']
    sum['minerals']['sodium']['amount'] += food['minerals']['sodium']['amount']
    sum['minerals']['zinc']['amount'] += food['minerals']['zinc']['amount']
    sum['minerals']['copper']['amount'] += food['minerals']['copper']['amount']
    sum['minerals']['manganese']['amount'] += food['minerals']['manganese']['amount']
    sum['minerals']['selenium']['amount'] += food['minerals']['selenium']['amount']
    sum['minerals']['fluoride']['amount'] += food['minerals']['fluoride']['amount']
    return sum
  }, generateSumObject())
)