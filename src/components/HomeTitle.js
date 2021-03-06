import React from 'react'

const dietomateGreen = {
  color: 'rgb(33, 186, 69)',
}
// Who knows when we might need a 1337 ReaCtiVe sUpEr home title?
const HomeTitle = () => {
  return (
    <div className='home-title'>
      <h1 style={dietomateGreen}>Automate Your Diet</h1>
      <h2>Control Your Health</h2>
      <h4 style={dietomateGreen}>Dietomate creates an optimal nutrition plan for you, so that you don't depend on nutritionists, fitness coaches and diaries
      <br></br>
      All you have left is just the eating!</h4>
    </div>
  )
}

export default HomeTitle