import React from 'react';
import Ingredient from './Ingredient'

const ingredients = [
    {name: 'Pork', id: 0},
    {name: 'Tomatoes', id: 1},
    {name: 'Chili', id: 2},
    {name: 'Cheese', id: 3},
    {name: 'Onion', id: 4},
    {name: 'Champignon', id: 5},
    {name: 'Tomato sauce', id: 6},
    {name: 'Olive', id: 7}
]

class AppPizza extends React.Component {

    state = {
        counter: 0,
    }

    setCounter = (value) => {

        if(value === true) {
            this.setState({ counter: this.state.counter +1 })
        } else this.setState({ counter: this.state.counter -1 })

    }

    render() {
        return (
            <div>
                <p>Выберете ингридиенты для пиццы:</p>

                {ingredients.map((item) => 
                <Ingredient key={item.id} name={item.name} onClick={this.setCounter}/>
                )}

                {this.state.counter === 5 && <p>Вы можете выбрать до 5 ингридиентов😔</p> }
            </div>
        )
    }
}

export default AppPizza;