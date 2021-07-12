import React from 'react';
import CheckboxPizza from './CheckboxPizza'

const ingridients = [
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

    setChecked = (event) => {
        const nameCheckbox = event.target.name
        this.setState({  [nameCheckbox]: event.target.checked  })

        if(event.target.checked) {
            this.setState({ counter: this.state.counter +1 })
        } else this.setState({ counter: this.state.counter -1 })

    }

    render() {
        return (
            <div>
                <p>Выберете ингридиенты для пиццы:</p>
                <CheckboxPizza items={ingridients} onClick={this.setChecked}/>

                {this.state.counter === 5 && <p>Вы можете выбрать до 5 ингридиентов😔</p> }
            </div>
        )
    }
}

export default AppPizza;