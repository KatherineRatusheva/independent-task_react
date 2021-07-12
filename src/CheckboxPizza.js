import React from 'react';

class CheckboxPizza extends React.Component {

    render() {
        return (
            <>
            {this.props.items.map((item) =>
                <div key={item.id}>
                    <input type='checkbox' 
                    name={item.name} 
                    onChange={this.props.onClick} />
                    {item.name}
                </div>
            )}
            </>
        )
    }

}

export default CheckboxPizza;