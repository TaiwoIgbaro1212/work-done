import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = { number: 'zero' }

  }

  click = () => {
    if (this.state.number === 'zero') {
      this.setState({ number: 1 });
      return;
    }

    if (this.state.number === 10) {
      this.setState({ number: 'zero' })
      return;
    }
    this.setState({ number: this.state.number + 1 })

  }
  // state = {  } 
  render() {
    return (
      <div>
        <label className='forward'>{this.state.number}</label>
        <button className='btn btn-danger m-3' onClick={this.click}>Click</button>
      </div>
    )
  }
}

export default Example;