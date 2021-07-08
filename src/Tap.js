import React from 'react';

class Tap extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.clickFunction(this.props.label)}> {this.props.label} </button>
      </div>
    )
  }
}

export default Tap;