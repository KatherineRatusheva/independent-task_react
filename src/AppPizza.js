import React from 'react';

let ingridients = [
    {name: 'Pork'},
    {name: 'Tomatoes'},
    {name: 'Chili'},
    {name: 'Cheese'},
    {name: 'Onion'},
    {name: 'Champignon'},
    {name: 'Tomato sauce'},
    {name: 'Olive'}
]

class AppPizza extends React.Component {
    state = {
        text: 'Вы можете выбрать до 5 ингридиентов😔',
        checkState: [],
    }

    isChecked = (id, event) => {
        let isSelected = event.target.checked
        let arrCheckbox = [...this.state.checkState, id]

        if(isSelected) {
            if(this.state.checkState.length < 5){
               this.setState({ checkState: arrCheckbox })
            }
        } else this.setState({ checkState: this.state.checkState.filter((item) => id !== item )})

    }

    render() {
        return (
            <div>
                <p>Выберете ингридиенты для пиццы:</p>

                {ingridients.map((item, index) => 

                <div key={index}><input type='checkbox' checked={this.state.checkState.indexOf(index)>=0} 
                onChange={this.isChecked.bind(this,index)}/>  {item.name}  </div>)}
                
                {this.state.checkState.length < 5 ? 
                <p>Вы выбрали: <b>{this.state.checkState.length}</b> ингридиентов</p> :
                <p>{this.state.text}</p>}
                
            </div>
        )
    }
}

export default AppPizza;