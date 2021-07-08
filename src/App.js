import React from 'react';
import Tap from './Tap'

class App extends React.Component {
  
  buttonOne = () => {
    console.log('Вы нажали на первую кнопку');
  }
  
  buttonTwo = () => {
    alert('Вы нажали на вторую кнопку')
  }
  
  buttonThree = (item) => {
    console.log(`Кнопка с параметром: ${item}`);
  }
  
  render() {
    return (
      <div>
        <Tap label='Кнопка 1' clickFunction={this.buttonOne} />
        <Tap label='Кнопка 2' clickFunction={this.buttonTwo} />
        <Tap label='Кнопка 3' clickFunction={this.buttonThree} />
      </div>
    )
  }
}

export default App;