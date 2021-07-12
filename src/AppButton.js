import React from 'react';
import Button from './Button';

class AppButton extends React.Component {
    
    state = {
        number: 0
    }

    plus = (x) => {
        this.setState({number: this.state.number + x})
    }

    minus = (x) => {
        this.setState({number: this.state.number - x})
    }

    render() {
        return (
            <div>
                <Button label='Plus' onClick={() => this.plus(1)}/>
                {this.state.number}
                <Button label='Minus' onClick={() => this.minus(1)}/>
            </div>
        )
    }
}

export default AppButton;