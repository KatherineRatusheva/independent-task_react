import React from 'react';

class Ingredient extends React.Component {

    state = {
        isChecked: false,
    }

    setChecked = () => {
        this.setState({  isChecked: !this.state.isChecked  })
    }

    render() {
        return (
            <div>
                <input type='checkbox' 
                checked={this.state.isChecked}
                onChange={this.setChecked}
                onClick={() => this.props.onClick(!this.state.isChecked)}
                />
                {this.props.name}
            </div>
        )
    }

}

export default Ingredient;